//npm install uuid
import { randomBytes } from "crypto";
import { v4 as uuidv4 } from "uuid";

function randomString(): string {
  return randomBytes(7).toString("hex");
}

function randomEmail(): string {
  return `${randomString()}@yopmail.com`;
}
function randomUUID4(): string {
  return uuidv4();
}

randomString();

export default { randomString, randomEmail };
