import { boss_kills } from "@/prisma/bosskills";
import Image from "next/image";
import Link from "next/link";

type Props = {
  boss_kills: boss_kills;
};

export default function LatestBossKillsCard(props: Props) {
  return (
    <div className="flex w-72 m-1">
      <Link
        href={`boss_kills/${props.boss_kills.id?.toString()}`}
        className="flex flex-col mx-1"
        prefetch={false}
      >
        <div className="flex text-start mx-1">
          {props.boss_kills.id?.toString()} slain by{" "}
          {props.boss_kills.guild?.toString()}
        </div>
        <div className="flex text-start mx-1">
          {props.boss_kills.time?.toString()}
        </div>
      </Link>
    </div>
  );
}
