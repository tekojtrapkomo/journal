import { MongoClient } from 'mongodb';
const MONGODB_URI = 'mongodb+srv://battogtokhportfolio:zzcfYtKvqpX7PsZp@cluster0.jgpty.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
const client = new MongoClient(MONGODB_URI);
let db;

export async function connectToDatabase() {
    if (!db) {
        await client.connect();
        db = client.db('login'); // replace with your database name
    }
    return db;
}
