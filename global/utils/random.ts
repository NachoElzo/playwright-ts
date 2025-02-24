import { randomBytes } from "crypto";

// File for create random data
function randomString(): string {
  return randomBytes(10).toString("hex");
}
function randomEmail(): string {
  return `${randomString()}@yopmail.com`;
}

function randomName(): string {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  return firstName;
}

function randomLastName() {
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return lastName;
}
const firstNames = [
  "Rosamel",
  "Alex",
  "Chris",
  "Taylor",
  "Jordan",
  "Casey",
  "Morgan",
  "Jose",
  "Alicia",
  "Bruno",
  "Marie",
];
const lastNames = [
  "Williams",
  "Jones",
  "Garcia",
  "Fierro",
  "Martinez",
  "Miller",
  "Davis",
  "Lopez",
  "Elzo",
  "Correa",
  "Merino",
  "Jane",
];

export default {
  randomString,
  randomEmail,
  randomName,
  randomLastName,
};
