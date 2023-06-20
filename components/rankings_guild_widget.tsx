import { boss_kills_rankings_guild } from "@/prisma/bosskills";
import RankingsGuildCard from "./rankings_guild_card";

type Props = {
  boss_kills_rankings_guilds: boss_kills_rankings_guild[];
};

export default function RankingsGuildWidget(props: Props) {
  return (
    <div className="m-0.5 flex w-96 max-w-full flex-col justify-center">
      <p className="m-0.5 text-xl font-bold">Boss Kills Rankings: Guilds</p>
      {props.boss_kills_rankings_guilds.map(
        (boss_kills_rankings_guild, index) => {
          return (
            <RankingsGuildCard
              key={index}
              boss_kills_rankings_guild={boss_kills_rankings_guild}
            />
          );
        }
      )}
    </div>
  );
}
