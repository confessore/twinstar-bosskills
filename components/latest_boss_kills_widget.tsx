import { boss_kills } from "@/prisma/bosskills";
import Image from "next/image";
import LatestBossKillsCard from "./latest_boss_kills_card";

type Props = {
  latest_boss_kills: boss_kills[];
};

export default function LatestBossKillsWidget(props: Props) {
  return (
    <div className="m-1 flex w-72">
      {props !== undefined && props.latest_boss_kills !== undefined && (
        <div className="m-1 flex flex-col">
          {props.latest_boss_kills.map((boss_kills, index) => {
            if (!boss_kills.hidden) {
              return (
                <LatestBossKillsCard key={index} boss_kills={boss_kills} />
              );
            } else {
              return;
            }
          })}
        </div>
      )}
    </div>
  );
}
