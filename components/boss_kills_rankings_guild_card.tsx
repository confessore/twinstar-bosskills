import { boss_kills, boss_kills_rankings_guild } from "@/prisma/bosskills";
import Image from "next/image";
import Link from "next/link";

type Props = {
  boss_kills_rankings_guild: boss_kills_rankings_guild;
};

export default function BossKillsRankingsGuildCard(props: Props) {
  return (
    <div className='m-1 flex items-center'>
        <div className="mx-1 flex">
        Rank {props.boss_kills_rankings_guild.ranking?.toString()}
        </div>
        <div className='m-1 flex flex-col'>
            <div className="mx-1 flex text-lg text-">
            <strong>{props.boss_kills_rankings_guild.guild?.toString()}</strong>
            </div>
            <div className="mx-1 flex">
            {props.boss_kills_rankings_guild.points?.toString()} Points
            </div>
        </div>
    </div>
  );
}
