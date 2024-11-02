// src/lib/db.js or wherever your DB connection is
import { MONGODB_URI } from '$env/static/private';
import { MongoClient } from 'mongodb';

let client;

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