import { boss_kills_players } from "@/prisma/bosskills";
import {
  matchClassColor,
  parse_class,
  parse_talent_specialization,
} from "@/styles/colors";
import { get_boss_kill_players } from "@/utils/bosskills.db";
import { useRouter } from "next/router";
import "@/app/globals.css";

type Props = {
  boss_kill_players: boss_kills_players[];
};

export default function Page(props: Props) {
  const calculatePercentDamage = (total: number, fragment: number) => {
    return ((fragment / total) * 100).toString();
  };

  const calculateTotalDamage = () => {
    let total = 0;
    for (let i = 0; i < props.boss_kill_players.length; i++) {
      total += parseInt(props.boss_kill_players[i].dmgDone.toString());
    }
    return total;
  };

  return (
    <>
      {props !== undefined && props.boss_kill_players !== undefined && (
        <>
          <div className="">
            {props.boss_kill_players
              .sort(
                (x, y) =>
                  parseInt(y.dmgDone.toString()) -
                  parseInt(x.dmgDone.toString())
              )
              .map((player: boss_kills_players, index: any) => {
                return (
                  <div key={index} className="m-1 p-1 w-64 bg-amber-200">
                    <div>guid: {player.guid}</div>
                    <div className="bg-gray-200 rounded-full dark:bg-gray-700">
                      <div
                        className="text-xs font-medium text-blue-200 text-center p-0.5 leading-none rounded-full"
                        style={{
                          width:
                            index === 0
                              ? "100%"
                              : calculatePercentDamage(
                                  parseInt(
                                    props.boss_kill_players[0].dmgDone.toString()
                                  ),
                                  parseInt(player.dmgDone.toString())
                                ) + "%",
                          backgroundColor: matchClassColor(
                            parse_class(parseInt(player.talent_spec.toString()))
                          ),
                        }}
                      >
                        {player.dmgDone.toString()}
                        {parse_class(parseInt(player.talent_spec.toString()))}
                        {parseInt(player.talent_spec.toString())}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context: any) {
  let id = context.query.id;
  let boss_kill_players = await get_boss_kill_players(parseInt(id));
  return {
    props: { boss_kill_players: JSON.parse(boss_kill_players) }, // will be passed to the page component as props
  };
}
