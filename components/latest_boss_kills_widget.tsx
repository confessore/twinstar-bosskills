import { boss_kills } from "@/prisma/bosskills";
import Image from "next/image";

type Props = {
  latest_boss_kills: boss_kills[];
};

export default function LatestBossKillsWidget(props: Props) {
  return (
    <div className="flex justify-center items-center">
      {props !== undefined && props.latest_boss_kills !== undefined && (
        <div className='flex flex-col m-1 p-1 w-64 justify-center items-center'>
          {props.latest_boss_kills.map((boss_kill, index) => {
            if (!boss_kill.hidden) {
              return (
                <div key={index} className='flex m-1 p-1'>
                  <a href={`boss_kill/${boss_kill.id?.toString()}`} className='flex flex-col'>
                    <p>{boss_kill.id?.toString()}</p>
                    <p>{boss_kill.realm?.toString()}</p>
                    <p>{boss_kill.guild?.toString()}</p>
                    <p>{boss_kill.time?.toString()}</p>
                  </a>
                </div>
              );
            } else { return; }
          })}
        </div>
      )}
    </div>
  );
}
