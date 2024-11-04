// src/routes/analytics/+server.js
export async function GET() {
    const response = await fetch('https://cloud.umami.is/script.js');
    const text = await response.text();
    
    return new Response(text, {
        headers: {
            'content-type': 'application/javascript'
        }
    });
}