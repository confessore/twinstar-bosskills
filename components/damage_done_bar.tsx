import { boss_kills, boss_kills_players } from "@/prisma/bosskills";
import Image from "next/image";
import Link from "next/link";
import {
  matchClassColor,
  parse_class,
  parse_talent_specialization,
} from "@/styles/colors";

type Props = {
  boss_kills_player: boss_kills_players;
  width_percent: string;
};

export default function DamageDoneBar(props: Props) {
  return (
    <div className="w-96 bg-amber-200 m-1 p-1">
      <div>guid: {props.boss_kills_player.guid}</div>
      <div className="bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="text-xs font-medium text-blue-200 text-center p-0.5 leading-none rounded-full"
          style={{
            width: props.width_percent,
            backgroundColor: matchClassColor(
              parse_class(
                parseInt(props.boss_kills_player.talent_spec.toString())
              )
            ),
          }}
        >
          {props.boss_kills_player.dmgDone.toString()}
          {parse_class(
            parseInt(props.boss_kills_player.talent_spec.toString())
          )}
          {parseInt(props.boss_kills_player.talent_spec.toString())}
        </div>
      </div>
    </div>
  );
}
