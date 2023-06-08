import { boss_kills, boss_kills_players } from "@/prisma/bosskills";
import DamageDoneBar from "./damage_done_bar";
import { useState } from "react";
import DamageTakenBar from "./damage_taken_bar";

type Props = {
  boss_kills_players: boss_kills_players[];
};

export default function DamageTakenWidget(props: Props) {
  let [boss_kills_players] = useState(
    props.boss_kills_players.sort(
      (x, y) =>
        parseInt(y.dmgTaken.toString()) - parseInt(x.dmgTaken.toString())
    )
  );
  const calculatePercentDamageTaken = (total: number, fragment: number) => {
    return ((fragment / total) * 100).toString();
  };
  const calculateTotalDamage = () => {
    let total = 0;
    for (let i = 0; i < props.boss_kills_players.length; i++) {
      total += parseInt(props.boss_kills_players[i].dmgDone.toString());
    }
    return total;
  };

  return (
    <div className="flex w-72 justify-center items-center m-1 p-1">
      {props !== undefined && boss_kills_players !== undefined && (
        <div className="flex flex-col justify-center items-center m-1 p-1">
          <p>Damage Taken</p>
          {boss_kills_players.map(
            (boss_kills_player: boss_kills_players, index: any) => {
              return (
                <DamageTakenBar
                  key={index}
                  boss_kills_player={boss_kills_player}
                  width_percent={
                    index === 0
                      ? "100%"
                      : calculatePercentDamageTaken(
                          parseInt(boss_kills_players[0].dmgTaken.toString()),
                          parseInt(boss_kills_player.dmgTaken.toString())
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
