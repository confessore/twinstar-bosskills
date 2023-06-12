import { boss_kills, boss_kills_rankings_guild } from "@/prisma/bosskills";
import Image from "next/image";
import LatestBossKillsCard from "./latest_boss_kills_card";
import BossKillsRankingsGuildCard from "./boss_kills_rankings_guild_card";

type Props = {
  boss_kills_rankings_guilds: boss_kills_rankings_guild[];
};

export default function BossKillsRankingsGuildWidget(props: Props) {
  return (
    <div className="m-1 flex w-72">
      {props !== undefined && props.boss_kills_rankings_guilds !== undefined && (
        <div className="m-1 flex flex-col">
          {props.boss_kills_rankings_guilds.map((boss_kills_rankings_guild, index) => {
              return (
                <BossKillsRankingsGuildCard key={index} boss_kills_rankings_guild={boss_kills_rankings_guild} />
              );
          })}
        </div>
      )}
    </div>
  );
}