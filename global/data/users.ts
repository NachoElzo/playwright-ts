// Import random helper functions
import {
  randomName,
  randomLastName,
  randomDomain,
  randomString,
} from "../data/random";

const userName = `${randomName()}${randomLastName()}`;
const userEmail = `${userName}${randomDomain()}`;

// Generate two users with random data
const users = {
  user1: {
    name: userName,
    email: userEmail,
    password: randomString(),
  },
  user2: {
    name: userName,
    email: userEmail,
    password: randomString(),
  },
};

export default users;
