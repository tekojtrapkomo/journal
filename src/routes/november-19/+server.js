// routes/november-19/+server.js
import { connectToDatabase } from '$lib/db';
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
export async function GET() {
    const db = await connectToDatabase();
    const votesCollection = db.collection('november19-votes');

    // Aggregate to count votes for each option
    const results = await votesCollection.aggregate([
        {
            $group: {
                _id: '$choice',
                votes: { $sum: 1 }
            }
        },
        {
            $project: {
                _id: 0,
                name: '$_id',
                votes: 1
            }
        }
    ]).toArray();

    return new Response(JSON.stringify(results));
}

export async function POST({ request }) {
    const { newChoice, previousChoice } = await request.json();
    const userId = request.headers.get('X-User-Id') || generateUserId();
    const userAgent = request.headers.get('User-Agent');

    if (!newChoice) {
        return new Response('Invalid choice', { status: 400 });
    }

    const db = await connectToDatabase();
    const votesCollection = db.collection('november19-votes');

    // Update or create the user's vote
    await votesCollection.updateOne(
        { userId: userId },
        { 
            $set: { 
                userId: userId,
                choice: newChoice,
                updatedAt: new Date(),
                mongoliaTime: getMongoliaTimestamp(),
                userAgent
            }
        },
        { upsert: true }
    );

    // Get updated results
    const results = await votesCollection.aggregate([
        {
            $group: {
                _id: '$choice',
                votes: { $sum: 1 }
            }
        },
        {
            $project: {
                _id: 0,
                name: '$_id',
                votes: 1
            }
        }
    ]).toArray();

    return new Response(JSON.stringify(results));
}

// Helper function to generate a unique user ID
function generateUserId() {
    return 'user_' + Math.random().toString(36).substr(2, 9);
}