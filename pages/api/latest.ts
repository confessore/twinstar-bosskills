import { PrismaClient as bosskillsPrismaClient } from "../../prisma/bosskills";
export default async function handler(req: any, res: any) {
  let bosskills = new bosskillsPrismaClient();
  let latest_boss_kills = await bosskills.boss_kills.findMany({ take: 25 });
  res.status(200).json({ latest_boss_kills });
}
