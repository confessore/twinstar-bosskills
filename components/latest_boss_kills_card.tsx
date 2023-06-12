import { boss_kills } from "@/prisma/bosskills";
import Image from "next/image";
import Link from "next/link";

type Props = {
  boss_kills: boss_kills;
};

export default function LatestBossKillsCard(props: Props) {
  return (
    <div className="m-1 flex flex-col w-full">
      <Link
        href={`boss_kills/${props.boss_kills.id?.toString()}`}
        className="mx-1 flex flex-col"
        prefetch={false}
      >
        <div className="mx-1 flex text-start">
          {props.boss_kills.id?.toString()} slain by{" "}
          {props.boss_kills.guild?.toString()}
        </div>
        <div className="mx-1 flex text-start">
          {props.boss_kills.time?.toString()}
        </div>
      </Link>
    </div>
  );
}
