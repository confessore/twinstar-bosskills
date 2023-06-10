import characters_prisma from "./characters.prisma";
import { boss_kills_players } from "@/prisma/bosskills";

export async function get_characters(boss_kills_players: boss_kills_players[]) {
  let character_guids = boss_kills_players.flatMap((value) => value.guid);

  let result = await characters_prisma.characters.findMany({
    where: { guid: { in: character_guids } },
  });

  return result;
}