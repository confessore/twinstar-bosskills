import { boss_kills, boss_kills_rankings_guild } from "@/prisma/bosskills";
import Image from "next/image";
import Link from "next/link";

type Props = {
  boss_kills_rankings_guild: boss_kills_rankings_guild;
};

export default function BossKillsRankingsGuildCard(props: Props) {
  return (
    <div className="m-1 grid">
        <div className="mx-1 flex text-start">
          {props.boss_kills_rankings_guild.guild?.toString()} : guild
        </div>
        <div className="mx-1 flex text-start">
          {props.boss_kills_rankings_guild.ranking?.toString()} : ranking
        </div>
        <div className="mx-1 flex text-start">
          {props.boss_kills_rankings_guild.season?.toString()} : season
        </div>
        <div className="mx-1 flex text-start">
          {props.boss_kills_rankings_guild.points?.toString()} : points
        </div>
        <div className="mx-1 flex text-start">
          {props.boss_kills_rankings_guild.mode?.toString()} : mode
        </div>
        <div className="mx-1 flex text-start">
          {props.boss_kills_rankings_guild.realm?.toString()} : realm
        </div>
    </div>
  );
}
