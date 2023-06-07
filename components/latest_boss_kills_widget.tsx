import { boss_kills } from "@/prisma/bosskills";
import Image from "next/image";

type Props = {
  latest_boss_kills: boss_kills[];
};

export default function LatestBossKillsWidget(props: Props) {
  return (
    <>
      {props !== undefined && props.latest_boss_kills !== undefined && (
        <>
          {props.latest_boss_kills.map((boss_kill, index) => {
            return (
              <div key={index} className="flex flex-wrap gap-3">
                <p>{boss_kill.id?.toString()}</p>
                <p>{boss_kill.realm?.toString()}</p>
                <p>{boss_kill.guild?.toString()}</p>
                <p>{boss_kill.time?.toString()}</p>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
