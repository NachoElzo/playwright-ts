import { randomBytes } from "crypto";

const nombres = ["Carlos", "Lucia", "Martin", "Sofia", "Andres"];
const apellidos = ["Gomez", "Fernandez", "Rodriguez", "Perez", "Lopez"];
const dominios = [
  "yopmail.com",
  "mailinator.com",
  "tempmail.com",
  "emailfake.com",
  "dispostable.com",
];

export function randomName(): string {
  return nombres[Math.floor(Math.random() * nombres.length)];
}

export function randomLastName(): string {
  return apellidos[Math.floor(Math.random() * apellidos.length)];
}

export function randomDomain(): string {
  let dominio = Math.floor(Math.random() * dominios.length);
  return `@${dominios[dominio]}`;
}

export function randomString(): string {
  return randomBytes(7).toString("hex");
}

export function randomNumber(): string {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}
