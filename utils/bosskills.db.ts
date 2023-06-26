import bosskills_prisma from "./bosskills.prisma";

export async function get_latest_boss_kills() {
  const latest_boss_kills = await bosskills_prisma.boss_kills.findMany({
    select: { id: true, entry: true, guild: true, time: true, mode: true },
    where: { hidden: false },
    orderBy: {
      time: "desc",
    },
    take: 50,
  });
  const json = JSON.stringify(latest_boss_kills);
  return JSON.parse(json);
}

export async function get_boss_kills_rankings_guilds() {
  const boss_kills_rankings_guilds =
    await bosskills_prisma.boss_kills_rankings_guild.findMany();
  const json = JSON.stringify(boss_kills_rankings_guilds);
  return JSON.parse(json);
}

export async function get_boss_kill_players(id: number) {
  const boss_kills_players = await bosskills_prisma.boss_kills_players.findMany(
    {
      where: { id },
    }
  );
  const json = JSON.stringify(
    boss_kills_players,
    (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
  );
  return JSON.parse(json);
}

export async function get_all_boss_kills_ids() {
  const boss_kills_ids = await bosskills_prisma.boss_kills.findMany({
    select: { id: true },
    where: { hidden: false },
    orderBy: {
      time: "desc",
    },
  });
  return boss_kills_ids;
}

export async function get_boss_kill_by_id(id: number) {
  const boss_kills = await bosskills_prisma.boss_kills.findFirst({
    where: { id },
  });
  const json = JSON.stringify(boss_kills);
  return JSON.parse(json);
}

export async function get_all_boss_kills_by_entry(entry: number) {
  const boss_kills = await bosskills_prisma.boss_kills.findMany({
    select: { id: true, entry: true, guild: true, time: true, mode: true },
    where: { entry, hidden: false },
    orderBy: {
      time: "desc",
    },
  });
  const json = JSON.stringify(boss_kills);
  return JSON.parse(json);
}

export async function get_all_boss_kills_by_entry_and_mode(
  entry: number,
  mode: number
) {
  const boss_kills = await bosskills_prisma.boss_kills.findMany({
    select: { id: true, entry: true, guild: true, time: true, mode: true },
    where: { entry, mode, hidden: false },
    orderBy: {
      time: "desc",
    },
  });
  const json = JSON.stringify(boss_kills);
  return JSON.parse(json);
}
