import bcrypt from 'bcrypt';
import { connectToDatabase } from '$lib/db';

const PASSWORD_HASH = '$2b$10$WFTaM7eL3ujdR1s40b4nKu.EVGSe/SuvHw6WzI31NJR77a41raenu'; 

export async function POST({ request, cookies }) {
    const { password } = await request.json();
    const isCorrectPassword = await bcrypt.compare(password, PASSWORD_HASH);

    try {
        // Connect to the database and log the attempt
        const db = await connectToDatabase();
        const loginAttemptsCollection = db.collection('login_attempts');

        await loginAttemptsCollection.insertOne({
            timestamp: new Date(),
            attempt: password,
            success: isCorrectPassword,
            environment: process.env.NODE_ENV // helpful for debugging
        });
    } catch (error) {
        console.error('Error logging login attempt:', error);
        // Don't throw the error - just log it and continue
        // This way, the login still works even if logging fails
    }
    if (isCorrectPassword) {
        cookies.set('authenticated', 'true', { path: '/', httpOnly: true, maxAge: 200 });
        return new Response(JSON.stringify({ success: true, message: 'Login successful!' }), { status: 200 });
    } else {
        return new Response(JSON.stringify({ success: false, message: 'Incorrect password. Try again.' }), { status: 401 });
    }
}
