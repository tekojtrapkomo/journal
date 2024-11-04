import bcrypt from 'bcrypt';
import { connectToDatabase } from '$lib/db';

const PASSWORD_HASH = '$2b$10$WFTaM7eL3ujdR1s40b4nKu.EVGSe/SuvHw6WzI31NJR77a41raenu'; 

const mongoliaTimestamp = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Ulaanbaatar',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
});

export async function POST({ request, cookies }) {

    const {
        password,
        userAgent,
        referrer,
        screenResolution,
        timezone,
        language,
        deviceType,
        preferredTheme,
        visitTime,
        utmParams,
        timeOnPage,
        isReturningUser
    } = await request.json();
    
    const isCorrectPassword = await bcrypt.compare(password, PASSWORD_HASH);

    const db = await connectToDatabase();
    const loginAttemptsCollection = db.collection('login_attempts_nov_4');

    let locationData = null;

    try {
        const locationResponse = await fetch(`https://ipinfo.io/json?token=a5c5c1b284088f`);
        locationData = await locationResponse.json();
    } catch {
    }


    await loginAttemptsCollection.insertOne({
        attempt: password,
        success: isCorrectPassword,
        timestamp: mongoliaTimestamp,
        location: locationData,
        device: {
            type: deviceType,
            screenResolution,
            browser: getBrowserInfo(userAgent),
            os: getOSInfo(userAgent)
        },
        user: {
            language,
            timezone,
            preferredTheme,
            isReturningUser
        },            marketing: {
            referrer,
            visitTime,
            timeOnPage,
            utm: utmParams,
            pageUrl: request.headers.get('referer')
        },
        timestampISO: new Date().toISOString(),
        userAgent,
    });

    if (isCorrectPassword) {
        cookies.set('authenticated', 'true', { path: '/', httpOnly: true, maxAge: 1800 });
        return new Response(JSON.stringify({ success: true, message: 'Login successful!' }), { status: 200 });
    } else {
        return new Response(JSON.stringify({ success: false, message: 'Incorrect password. Try again.' }), { status: 401 });
    }
}
