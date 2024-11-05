import bcrypt from 'bcrypt';
import { connectToDatabase } from '$lib/db';
import { dev } from '$app/environment';

const NOV4_PASSWORD_HASH = '$2b$10$GzYnQKQfvC1J3j2yPF4ArexPCJWEpurxVmJldrDqvctbwHJfwlW4K';

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

async function logNov4Attempt(attemptData) {
    if (dev) {
        console.log('Dev mode: Skipping DB operation', attemptData);
        return;
    }

    try {
        const db = await connectToDatabase();
        const loginAttemptsCollection = db.collection('nov4_attempts');
        await loginAttemptsCollection.insertOne(attemptData);
    } catch  {
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        const password = formData.get('password');
        const userAgent = request.headers.get('user-agent') || 'unknown';
        
        const isCorrectPassword = await bcrypt.compare(password, NOV4_PASSWORD_HASH);
        
        let locationData = null;

        if (!dev) {
            try {
                const locationResponse = await fetch(`https://ipinfo.io/json?token=a5c5c1b284088f`);
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
            page: 'nov4'
        };

        await logNov4Attempt(attemptData);

        if (isCorrectPassword) {
            // Make sure the cookie path is correct
            cookies.set('nov4_authenticated', 'true', {
                path: '/', // Changed to root path
                httpOnly: true,
                maxAge: 1800
            });
            
            return {
                success: true,
                message: 'Login successful!'
            };
        }

        return {
            success: false,
            message: 'nop'
        };
    }
};
/** @type {import('./$types').PageServerLoad} */
export const load = async ({ cookies }) => {
    return {
        hasNov4Access: cookies.get('nov4_authenticated') === 'true'
    };
};