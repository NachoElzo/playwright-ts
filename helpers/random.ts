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
  "John",
  "Jane",
  "Alex",
  "Chris",
  "Sam",
  "Taylor",
  "Jordan",
  "Pat",
  "Casey",
  "Morgan",
  "Jose",
  "Alicia",
  "Bruno",
];
const lastNames = [
  "Smith",
  "Johnson",
  "Brown",
  "Williams",
  "Jones",
  "Garcia",
  "Martinez",
  "Miller",
  "Davis",
  "Lopez",
  "Elzo",
  "Correa",
];

export default {
  randomString,
  randomEmail,
  randomName,
  randomLastName,
};
