import { boss_kills, boss_kills_players } from "@/prisma/bosskills";
import DamageDoneBar from "./damage_done_bar";

type Props = {
  boss_kills_players: boss_kills_players[];
};

export default function DamageDoneWidget(props: Props) {
  const calculatePercentDamage = (total: number, fragment: number) => {
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
    <div className="flex w-96 justify-center items-center m-1 p-1">
      {props !== undefined && props.boss_kills_players !== undefined && (
        <div className="flex flex-col justify-center items-center m-1 p-1">
          {props.boss_kills_players
            .sort(
              (x, y) =>
                parseInt(y.dmgDone.toString()) - parseInt(x.dmgDone.toString())
            )
            .map((boss_kills_player: boss_kills_players, index: any) => {
              return (
                <DamageDoneBar
                  key={index}
                  boss_kills_player={boss_kills_player}
                  width_percent={
                    index === 0
                      ? "100%"
                      : calculatePercentDamage(
                          parseInt(
                            props.boss_kills_players[0].dmgDone.toString()
                          ),
                          parseInt(boss_kills_player.dmgDone.toString())
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
