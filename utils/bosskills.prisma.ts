import {
    boss_kills,
    PrismaClient as bosskillsPrismaClient,
  } from "@/prisma/bosskills";

// Docs about instantiating `PrismaClient` with Next.js:
// https://pris.ly/d/help/next-js-best-practices

let bosskills: bosskillsPrismaClient;

bosskills = new bosskillsPrismaClient();

export default bosskills;