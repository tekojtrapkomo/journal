import bcrypt from 'bcrypt';
import { connectToDatabase } from '$lib/db';
import { dev } from '$app/environment';  // Import dev flag from SvelteKit

const PASSWORD_HASH = '$2b$10$apApF49Y4D/myXYqqZp5YOt18XSZMTJPzIDCX9A6sA7muW4X0/qha'; 
const OLD_PASSWORD_HASH = '$2b$10$zeEIx7wlJhrF31s8MEFV.efcZbhpsX3qqlmhEcL5vKPIMD3F3Uobi'; // Add a hash for the old password


const getMongoliaTimestamp = () => {
    return new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Ulaanbaatar',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
};
async function sendPushoverNotification(data) {
    const message = `
        Login Attempt:
        - Attempt: ${data.attempt}
        - Success: ${data.success}
        - Timestamp: ${data.timestampISO}
        - Location: ${data.location ? JSON.stringify(data.location) : 'N/A'}
        - User Agent: ${data.userAgent}
    `;

    try {
        const response = await fetch('https://api.pushover.net/1/messages.json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: 'aatrp2ctk7gpuv5gpsbxi7x369o82q',
                user: 'u6xf4twqhootjwmz8phmcu6xdtkvye',
                message,
            }),
        });

        if (!response.ok) {
            console.error('Pushover notification failed:', await response.text());
        } else {
            console.log('Notification sent via Pushover');
        }
    } catch (error) {
        console.error('Error sending Pushover notification:', error);
    }
}
async function logLoginAttempt(attemptData) {
    // Skip DB operations in dev mode
    if (dev) {
        console.log('Dev mode: Skipping DB operation', attemptData);
        return;
    }

    try {
        const db = await connectToDatabase();
        const loginAttemptsCollection = db.collection('newLoginAttempts');
        await loginAttemptsCollection.insertOne(attemptData);
        await sendPushoverNotification(attemptData);

    } catch (error) {
        console.error('Database operation failed:', error);
        // In production, you might want to handle this error differently
    }
}


export async function POST({ request, cookies }) {
    const { password, userAgent } = await request.json();
    const isCorrectPassword = await bcrypt.compare(password, PASSWORD_HASH);
    const isOldPassword = await bcrypt.compare(password, OLD_PASSWORD_HASH);


    let locationData = null;

    if (!dev) {  // Only fetch location data in production
        try {
            const locationResponse = await fetch(`https://api.ipify.org?format=json`);
            locationData = await locationResponse.json();
        } catch (error) {
            console.error('Location fetch failed:', error);
        }
    }

    const attemptData = {
        attempt: password,
        success: isCorrectPassword,
        timestamp: getMongoliaTimestamp(),
        location: locationData,
        timestampISO: new Date().toISOString(),
        userAgent,
    };

    await logLoginAttempt(attemptData);

    if (isCorrectPassword) {
        cookies.set('authenticated', 'true', { 
            path: '/', 
            httpOnly: true, 
            maxAge: 1800 
        });
        return new Response(
            JSON.stringify({ success: true, message: 'YESSIR!' }), 
            { status: 200 }
        );
    } else if (isOldPassword) {
        return new Response(
            JSON.stringify({ success: false, message: 'words have meaning and names have power' }), 
            { status: 401 }
        );
    } else {
        return new Response(
            JSON.stringify({ success: false, image: '/mrfresh.png' }), 
            { status: 401 }
        );
    }
}