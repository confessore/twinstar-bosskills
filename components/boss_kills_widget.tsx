import { boss_kills } from "@/prisma/bosskills";
import BossKillsCard from "./boss_kills_card";

type Props = {
  latest_boss_kills: boss_kills[];
};

export default function BossKillsWidget(props: Props) {
  return (
    <div className="m-0.5 flex w-96 max-w-full flex-col justify-center">
      <p className="m-0.5 text-xl font-bold">Latest Boss Kills</p>
      {props.latest_boss_kills.map((boss_kills, index) => {
        if (!boss_kills.hidden) {
          return <BossKillsCard key={index} boss_kills={boss_kills} />;
        } else {
          return;
        }
      })}
    </div>
  );
}
