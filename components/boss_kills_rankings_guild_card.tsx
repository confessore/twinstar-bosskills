import { boss_kills, boss_kills_rankings_guild } from "@/prisma/bosskills";
import Image from "next/image";
import Link from "next/link";

type Props = {
  boss_kills_rankings_guild: boss_kills_rankings_guild;
};

export default function BossKillsRankingsGuildCard(props: Props) {
  return (
    <div className="m-0.5 flex w-96 max-w-full bg-slate-500 items-center justify-between">
      <div className="m-0.5 flex flex-col">
        <div className="m-0.5 flex text-lg font-bold">
          <p className='font-bold text-2xl'>{props.boss_kills_rankings_guild.guild?.toString()}</p>
        </div>
        <div className="m-0.5 flex text-lg">
          <p className=''><strong>{props.boss_kills_rankings_guild.points?.toString()}</strong> Points</p>
        </div>
      </div>
      <div className="m-0.5 flex text-xl">
        <p>Rank <strong>{props.boss_kills_rankings_guild.ranking?.toString()}</strong></p>
      </div>
    </div>
  );
}
