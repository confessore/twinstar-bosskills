import { boss_kills, boss_kills_players } from "@/prisma/bosskills";
import DamageDoneBar from "./damage_done_bar";
import HealingDoneBar from "./healing_done_bar";
import { useState } from "react";
import HealingTakenBar from "./healing_taken_bar";

type Props = {
  boss_kills_players: boss_kills_players[];
};

export default function HealingTakenWidget(props: Props) {
  let [boss_kills_players] = useState(
    props.boss_kills_players.sort(
      (x, y) =>
        parseInt(y.healingTaken.toString()) -
        parseInt(x.healingTaken.toString())
    )
  );
  const calculatePercentHealingTaken = (total: number, fragment: number) => {
    return ((fragment / total) * 100).toString();
  };

  return (
    <div className="flex w-72 justify-center items-center m-1 p-1">
      {props !== undefined && boss_kills_players !== undefined && (
        <div className="flex flex-col justify-center items-center m-1 p-1">
          <p>Healing Taken</p>
          {boss_kills_players.map(
            (boss_kills_player: boss_kills_players, index: any) => {
              if (parseInt(boss_kills_player.healingTaken.toString()) === 0) {
                return;
              }
              return (
                <HealingTakenBar
                  key={index}
                  boss_kills_player={boss_kills_player}
                  width_percent={
                    index === 0
                      ? "100%"
                      : calculatePercentHealingTaken(
                          parseInt(
                            boss_kills_players[0].healingTaken.toString()
                          ),
                          parseInt(boss_kills_player.healingTaken.toString())
                        ) + "%"
                  }
                />
              );
            }
          )}
        </div>
      )}
    </div>
  );
}
