import { boss_kills, boss_kills_players } from "@/prisma/bosskills";
import { useState } from "react";
import { characters } from "@/prisma/characters";
import Bar from "./bar";

type Props = {
  boss_kills_players: boss_kills_players[];
  characters: characters[];
};

export default function HealingDoneWidget(props: Props) {
  let [boss_kills_players] = useState(
    props.boss_kills_players.sort(
      (x, y) =>
        parseInt(y.healingDone.toString()) +
        parseInt(y.absorbDone.toString()) -
        (parseInt(x.healingDone.toString()) + parseInt(x.absorbDone.toString()))
    )
  );
  const calculatePercentHealingDone = (total: number, fragment: number) => {
    return ((fragment / total) * 100).toString();
  };

  return (
    <div className="flex w-72 justify-center items-center m-1 p-1">
      {props !== undefined && boss_kills_players !== undefined && (
        <div className="flex flex-col justify-center items-center m-1 p-1">
          <p>Healing Done</p>
          {boss_kills_players.map(
            (boss_kills_player: boss_kills_players, index: any) => {
              if (
                parseInt(boss_kills_player.healingDone.toString()) +
                  parseInt(boss_kills_player.absorbDone.toString()) ===
                0
              ) {
                return;
              }
              return (
                <Bar
                  key={index}
                  boss_kills_player={boss_kills_player}
                  character_name={
                    props.characters.find(
                      (value) => value.guid === boss_kills_player.guid
                    )?.name ?? "Unknown"
                  }
                  width_percent={
                    index === 0
                      ? "100%"
                      : calculatePercentHealingDone(
                          parseInt(
                            boss_kills_players[0].healingDone.toString()
                          ) +
                            parseInt(
                              boss_kills_players[0].absorbDone.toString()
                            ),
                          parseInt(boss_kills_player.healingDone.toString()) +
                            parseInt(boss_kills_player.absorbDone.toString())
                        ) + "%"
                  }
                  value={
                    (parseInt(boss_kills_player.healingDone.toString()) +
                    parseInt(boss_kills_player.absorbDone.toString())).toString()
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
