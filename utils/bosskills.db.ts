import bosskills from "./bosskills.prisma";

export async function get_latest_boss_kills() {
  let latest_boss_kills = await bosskills.boss_kills.findMany({ take: 25 });
  let json = JSON.stringify(latest_boss_kills);
  return json;
}

export async function get_boss_kill_players(id: number) {
  let boss_kills_players = await bosskills.boss_kills_players.findMany({
    where: { id },
  });
  let json = JSON.stringify(
    boss_kills_players,
    (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
  );
  return json;
}
