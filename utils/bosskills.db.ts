import bosskills_prisma from "./bosskills.prisma";

export async function get_latest_boss_kills() {
  let latest_boss_kills = await bosskills_prisma.boss_kills.findMany({
    select: { id: true, entry:true, guild: true, time: true },
    where: { hidden: false }
  });
  let json = JSON.stringify(latest_boss_kills);
  return json;
}

export async function get_boss_kill_players(id: number) {
  let boss_kills_players = await bosskills_prisma.boss_kills_players.findMany({
    where: { id },
  });
  let json = JSON.stringify(
    boss_kills_players,
    (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
  );
  return json;
}

export async function get_all_boss_kills_ids() {
  let boss_kills_ids = await bosskills_prisma.boss_kills.findMany({
    select: { id: true },
    where: { hidden: false }
  });
  return boss_kills_ids
}