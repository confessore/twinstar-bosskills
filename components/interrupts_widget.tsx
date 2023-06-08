import { boss_kills, boss_kills_players } from "@/prisma/bosskills";
import DamageDoneBar from "./damage_done_bar";
import HealingDoneBar from "./healing_done_bar";
import { useState } from "react";
import HealingTakenBar from "./healing_taken_bar";
import InterruptsBar from "./interrupts_bar";

type Props = {
  boss_kills_players: boss_kills_players[];
};

export default function InterruptsWidget(props: Props) {
  let [boss_kills_players] = useState(
    props.boss_kills_players.sort(
      (x, y) =>
        parseInt(y.interrupts.toString()) - parseInt(x.interrupts.toString())
    )
  );
  const calculatePercentInterrupts = (total: number, fragment: number) => {
    return ((fragment / total) * 100).toString();
  };

  return (
    <div className="flex w-72 justify-center items-center m-1 p-1">
      {props !== undefined && boss_kills_players !== undefined && (
        <div className="flex flex-col justify-center items-center m-1 p-1">
          <p>Interrupts</p>
          {boss_kills_players.map(
            (boss_kills_player: boss_kills_players, index: any) => {
                if (parseInt(boss_kills_player.interrupts.toString()) === 0) {
                    return;
                  }
              return (
                <InterruptsBar
                  key={index}
                  boss_kills_player={boss_kills_player}
                  width_percent={
                    index === 0
                      ? "100%"
                      : calculatePercentInterrupts(
                          parseInt(
                            boss_kills_players[0].interrupts.toString()
                          ),
                          parseInt(boss_kills_player.interrupts.toString())
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
