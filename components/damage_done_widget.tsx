import { boss_kills, boss_kills_players } from "@/prisma/bosskills";
import { useState } from "react";
import { characters } from "@/prisma/characters";
import Bar from "./bar";

type Props = {
  boss_kills: boss_kills;
  boss_kills_players: boss_kills_players[];
  characters: characters[];
};

export default function DamageDoneWidget(props: Props) {
  let [boss_kills_players] = useState(
    props.boss_kills_players.sort(
      (x, y) => parseInt(y.dmgDone.toString()) - parseInt(x.dmgDone.toString())
    )
  );
  const calculatePercentDamageDone = (total: number, fragment: number) => {
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
    <>
      {props !== undefined && boss_kills_players !== undefined && (
        <div className="m-1 flex w-full flex-col">
          <p className="m-1 text-5xl font-bold">Damage Done</p>
          {boss_kills_players.map(
            (boss_kills_player: boss_kills_players, index: any) => {
              if (parseInt(boss_kills_player.dmgDone.toString()) === 0) {
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
                      : calculatePercentDamageDone(
                          parseInt(boss_kills_players[0].dmgDone.toString()),
                          parseInt(boss_kills_player.dmgDone.toString())
                        ) + "%"
                  }
                  value={boss_kills_player.dmgDone.toString()}
                  length={props.boss_kills.length}
                />
              );
            }
          )}
        </div>
      )}
    </>
  );
}
