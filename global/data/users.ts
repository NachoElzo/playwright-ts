// Import random helper functions
import random from "../utils/random";

const userName = `${random.randomName()} ${random.randomLastName()}`;
const userEmail = random.randomEmail();

// Generate two users with random data
const users = {
  user1: {
    name: userName,
    email: userEmail,
    password: "password123",
  },
  user2: {
    name: userName,
    email: userEmail,
    password: "password456",
  },
};

export default users;
