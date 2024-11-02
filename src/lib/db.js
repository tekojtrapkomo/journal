// src/lib/db.js or wherever your DB connection is
import { MongoClient } from 'mongodb';

let client;
const MONGODB_URI = 'mongodb+srv://battogtokhportfolio:zzcfYtKvqpX7PsZp@cluster0.jgpty.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&ssl=true';
export async function connectToDatabase() {
    if (!client) {
        try {
            client = await MongoClient.connect(MONGODB_URI);
            console.log('Connected to MongoDB');
            return client.db();
        } catch (error) {
            console.error('MongoDB Connection Error:', error);
            throw error;
        }
    }
    return client.db();
}