import { boss_kills } from "@/prisma/bosskills";
import Image from "next/image";
import LatestBossKillsCard from "./latest_boss_kills_card";

type Props = {
  latest_boss_kills: boss_kills[];
};

export default function LatestBossKillsWidget(props: Props) {
  return (
    <div className="m-0.5 flex w-96 max-w-full flex-col">
      <p className="m-0.5 text-xl font-bold">Latest Boss Kills</p>
      {props.latest_boss_kills.map((boss_kills, index) => {
        if (!boss_kills.hidden) {
          return <LatestBossKillsCard key={index} boss_kills={boss_kills} />;
        } else {
          return;
        }
      })}
    </div>
  );
}
