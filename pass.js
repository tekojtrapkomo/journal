import bcrypt from 'bcrypt';

const plaintextPassword = "19981220";
const saltRounds = 10;

bcrypt.hash(plaintextPassword, saltRounds)
  .then(hash => {
    console.log("Generated hash:", hash);
  })
  .catch(err => {
    console.error("Error generating hash:", err);
  });
