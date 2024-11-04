import bcrypt from 'bcrypt';

async function generateHash() {
    const hash = await bcrypt.hash('poison', 10);
    console.log('Your hash is:', hash);
}

generateHash();