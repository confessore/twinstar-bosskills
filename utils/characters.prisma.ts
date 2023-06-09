import { PrismaClient as charactersPrismaClient } from "@/prisma/characters";

// Docs about instantiating `PrismaClient` with Next.js:
// https://pris.ly/d/help/next-js-best-practices

let characters: charactersPrismaClient;

characters = new charactersPrismaClient();

export default characters;
