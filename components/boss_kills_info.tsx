import { boss_kills, boss_kills_players } from "@/prisma/bosskills";
import { useState } from "react";
import { characters } from "@/prisma/characters";
import Bar from "./bar";

type Props = {
  boss_kills: boss_kills;
};

export default function BossKillsInfo(props: Props) {
  return (
    <div className="m-0.5 flex w-96 max-w-full flex-col">
      <p className="m-0.5 text-3xl font-bold">{props.boss_kills.entry}</p>
      <p className="m-0.5 text-xl font-bold">{props.boss_kills.mode}</p>
      <p className="m-0.5 text-lg">
        Slain by: <strong>{props.boss_kills.guild}</strong>
      </p>
      <p className="m-0.5 text-lg">
        <strong>{props.boss_kills.time?.toString()}</strong>
      </p>
      <p className="m-0.5 text-lg">
        Length: <strong>{props.boss_kills.length / 1000}s</strong>
      </p>
      <p className="m-0.5 text-lg">
        Deaths: <strong>{props.boss_kills.deaths}</strong>
      </p>
      <p className="m-0.5 text-lg">
        Resurrects: <strong>{props.boss_kills.ressUsed}</strong>
      </p>
      <p className="m-0.5 text-lg">
        Wipes: <strong>{props.boss_kills.wipes}</strong>
      </p>
    </div>
  );
}
