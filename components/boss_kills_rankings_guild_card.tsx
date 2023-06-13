import { boss_kills, boss_kills_rankings_guild } from "@/prisma/bosskills";
import Image from "next/image";
import Link from "next/link";

type Props = {
  boss_kills_rankings_guild: boss_kills_rankings_guild;
};

export default function BossKillsRankingsGuildCard(props: Props) {
  return (
    <div className="m-0.5 flex w-full bg-slate-500 items-center">
      <div className="m-0.5 flex">
        Rank {props.boss_kills_rankings_guild.ranking?.toString()}
      </div>
      <div className="m-0.5 flex flex-col">
        <div className="m-0.5 flex text-lg font-bold">
          {props.boss_kills_rankings_guild.guild?.toString()}
        </div>
        <div className="m-0.5 flex">
          {props.boss_kills_rankings_guild.points?.toString()} Points
        </div>
      </div>
    </div>
  );
}
