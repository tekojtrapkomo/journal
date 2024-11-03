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

    const { password, userAgent } = await request.json();
    const isCorrectPassword = await bcrypt.compare(password, PASSWORD_HASH);

    const db = await connectToDatabase();
    const loginAttemptsCollection = db.collection('login_attempts');

    let locationData = null;

    try {
        const locationResponse = await fetch(`https://ipapi.co/json/`);
        locationData = await locationResponse.json();
    } catch (error) {
        console.error('Failed to fetch location data:', error);
    }


    await loginAttemptsCollection.insertOne({
        attempt: password,
        success: isCorrectPassword,
        timestamp: mongoliaTimestamp,
        location: locationData,
        timestampISO: new Date().toISOString(),
        userAgent,
    });

    if (isCorrectPassword) {
        cookies.set('authenticated', 'true', { path: '/', httpOnly: true, maxAge: 3600 });
        return new Response(JSON.stringify({ success: true, message: 'Login successful!' }), { status: 200 });
    } else {
        return new Response(JSON.stringify({ success: false, message: 'Incorrect password. Try again.' }), { status: 401 });
    }
}
