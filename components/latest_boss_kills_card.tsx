import { boss_kills } from "@/prisma/bosskills";
import Image from "next/image";
import Link from "next/link";

type Props = {
  boss_kills: boss_kills;
};

export default function LatestBossKillsCard(props: Props) {
  return (
    <div className="flex m-1 p-1">
      <Link
        href={`boss_kills/${props.boss_kills.id?.toString()}`}
        className="flex flex-col"
        prefetch={false}
      >
        <p>{props.boss_kills.id?.toString()}</p>
        <p>{props.boss_kills.realm?.toString()}</p>
        <p>{props.boss_kills.guild?.toString()}</p>
        <p>{props.boss_kills.time?.toString()}</p>
      </Link>
    </div>
  );
}
