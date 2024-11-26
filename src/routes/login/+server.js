import bcrypt from 'bcrypt';
import { connectToDatabase } from '$lib/db';
import { dev } from '$app/environment';  // Import dev flag from SvelteKit

const PASSWORD_HASH = '$2b$10$5EvETOoqEKDzbs3v1SwNie/AJQE0vwMJDvd9sXeBwcHv1RmjOI1/m'; 

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
    } catch (error) {
        console.error('Database operation failed:', error);
        // In production, you might want to handle this error differently
    }
}

export async function POST({ request, cookies }) {
    const { password, userAgent } = await request.json();
    const isCorrectPassword = await bcrypt.compare(password, PASSWORD_HASH);

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
            JSON.stringify({ success: true, message: 'Login successful!' }), 
            { status: 200 }
        );
    } else {
        return new Response(
            JSON.stringify({ success: false, message: 'Incorrect password. Try again.' }), 
            { status: 401 }
        );
    }
}