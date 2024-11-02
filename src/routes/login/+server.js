import bcrypt from 'bcrypt';
import { connectToDatabase } from '$lib/db';
import { PASSWORD_HASH } from '$env/static/private';

const HASH = PASSWORD_HASH 

export async function POST({ request, cookies }) {
    const { password } = await request.json();
    const isCorrectPassword = await bcrypt.compare(password, HASH);

    // Connect to the database and log the attempt
    const db = await connectToDatabase();
    const loginAttemptsCollection = db.collection('login_attempts');

    await loginAttemptsCollection.insertOne({
        timestamp: new Date(),
        attempt: password,
        success: isCorrectPassword
    });

    if (isCorrectPassword) {
        cookies.set('authenticated', 'true', { path: '/', httpOnly: true, maxAge: 200 });
        return new Response(JSON.stringify({ success: true, message: 'Login successful!' }), { status: 200 });
    } else {
        return new Response(JSON.stringify({ success: false, message: 'Incorrect password. Try again.' }), { status: 401 });
    }
}
