import { boss_kills, boss_kills_players } from "@/prisma/bosskills";
import DamageDoneBar from "./damage_done_bar";
import HealingDoneBar from "./healing_done_bar";
import { useState } from "react";

type Props = {
  boss_kills_players: boss_kills_players[];
};

export default function HealingDoneWidget(props: Props) {
  let [boss_kills_players] = useState(props.boss_kills_players.sort(
    (x, y) =>
      parseInt(y.healingDone.toString()) -
      parseInt(x.healingDone.toString())
  ));
  const calculatePercentHealing = (total: number, fragment: number) => {
    return ((fragment / total) * 100).toString();
  };

  return (
    <div className="flex w-72 justify-center items-center m-1 p-1">
      {props !== undefined && boss_kills_players !== undefined && (
        <div className="flex flex-col justify-center items-center m-1 p-1">
          <p>Healing Done</p>
          {boss_kills_players
            .map((boss_kills_player: boss_kills_players, index: any) => {
              return (
                <HealingDoneBar
                  key={index}
                  boss_kills_player={boss_kills_player}
                  width_percent={
                    index === 0
                      ? "100%"
                      : calculatePercentHealing(
                          parseInt(
                            boss_kills_players[0].healingDone.toString()
                          ),
                          parseInt(boss_kills_player.healingDone.toString())
                        ) + "%"
                  }
                />
              );
            })}
        </div>
      )}
    </div>
  );
}
