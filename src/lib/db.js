import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '$env/static/private';

const client = new MongoClient(MONGODB_URI);
let db;

export async function connectToDatabase() {
    if (!db) {
        await client.connect();
        db = client.db('login');
    }
    return db;
}
