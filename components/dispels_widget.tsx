import { boss_kills, boss_kills_players } from "@/prisma/bosskills";
import { useState } from "react";
import { characters } from "@/prisma/characters";
import Bar from "./bar";

type Props = {
  boss_kills: boss_kills;
  boss_kills_players: boss_kills_players[];
  characters: characters[];
};

export default function DispelsWidget(props: Props) {
  let [boss_kills_players] = useState(
    props.boss_kills_players.sort(
      (x, y) => parseInt(y.dispels.toString()) - parseInt(x.dispels.toString())
    )
  );
  const calculatePercentDispels = (total: number, fragment: number) => {
    return ((fragment / total) * 100).toString();
  };

  return (
    <div className="m-0.5 flex w-96 max-w-full flex-col">
      <p className="m-0.5 text-3xl font-bold">Dispels</p>
      {boss_kills_players.map(
        (boss_kills_player: boss_kills_players, index: any) => {
          if (parseInt(boss_kills_player.dispels.toString()) === 0) {
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
                  : calculatePercentDispels(
                      parseInt(boss_kills_players[0].dispels.toString()),
                      parseInt(boss_kills_player.dispels.toString())
                    ) + "%"
              }
              value={boss_kills_player.dispels.toString()}
              length={props.boss_kills.length}
            />
          );
        }
      )}
    </div>
  );
}
