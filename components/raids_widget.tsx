import { boss_kills } from "@/prisma/bosskills";
import Image from "next/image";
import LatestBossKillsCard from "./latest_boss_kills_card";
import { parse_boss } from "@/styles/colors";

type Props = {};

const raids = [
  // Mogu'shan Vaults
  [59915, 60009, 60143, 60410, 60701, 60399],
];

export default function RaidsWidget(props: Props) {
  return (
    <div className="m-0.5 flex w-96 max-w-full flex-col justify-center">
      <p className="m-0.5 text-xl font-bold">Raids</p>
      <div>
        <p>Mogu&apos;shan Vaults</p>
        {raids[0]?.map((value: number, index: number) => {
          return <p key={index}>{parse_boss(value)}</p>;
        })}
      </div>
    </div>
  );
}
