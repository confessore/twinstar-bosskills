import { boss_kills } from "@/prisma/bosskills";
import { parse_boss, parse_mode } from "@/styles/colors";
import Image from "next/image";
import Link from "next/link";

type Props = {
  boss_kills: boss_kills;
};

export default function LatestBossKillsCard(props: Props) {
  return (
    <Link
      href={`boss_kills/${props.boss_kills.id?.toString()}`}
      className="m-0.5 flex flex-col bg-slate-500"
      prefetch={false}
    >
      <p className="m-0.5 text-xs text-start">
        <strong>{props.boss_kills.time?.toString()}</strong>
      </p>
      <p className="m-0.5 text-3xl font-bold text-end">{parse_boss(props.boss_kills.entry)}</p>
      <p className="m-0.5 text-xl font-bold text-end">{parse_mode(props.boss_kills.mode)}</p>
      <p className="m-0.5 text-lg text-end">
        Slain by <strong>{props.boss_kills.guild !== "" ? props.boss_kills.guild : "a ragtag band of misfits"}</strong>
      </p>
    </Link>
  );
}
