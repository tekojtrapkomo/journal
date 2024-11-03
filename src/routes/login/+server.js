import bcrypt from 'bcrypt';
import { connectToDatabase } from '$lib/db';

const PASSWORD_HASH = '$2b$10$WFTaM7eL3ujdR1s40b4nKu.EVGSe/SuvHw6WzI31NJR77a41raenu'; 

export async function POST({ request, cookies }) {
    const { password } = await request.json();
    const isCorrectPassword = await bcrypt.compare(password, PASSWORD_HASH);

    const db = await connectToDatabase();
    const loginAttemptsCollection = db.collection('login_attempts');

    await loginAttemptsCollection.insertOne({
        timestamp: new Date().toLocaleDateString(),
        attempt: password,
        success: isCorrectPassword
    });

    if (isCorrectPassword) {
        cookies.set('authenticated', 'true', { path: '/', httpOnly: true, maxAge: 3600 });
        return new Response(JSON.stringify({ success: true, message: 'Login successful!' }), { status: 200 });
    } else {
        return new Response(JSON.stringify({ success: false, message: 'Incorrect password. Try again.' }), { status: 401 });
    }
}
