import { boss_kills, boss_kills_players } from "@/prisma/bosskills";
import Image from "next/image";
import Link from "next/link";
import {
  matchClassColor,
  parse_class,
  parse_talent_specialization,
  parse_talent_specialization_image,
} from "@/styles/colors";

type Props = {
  boss_kills_player: boss_kills_players;
  width_percent: string;
};

export default function DispelsBar(props: Props) {
  return (
    <div className="w-72 m-1 p-1">
      <div className="flex m-1">
        <Image
          src={parse_talent_specialization_image(
            props.boss_kills_player.talent_spec
          )}
          alt=""
          width={24}
          height={24}
          className="m-1"
        />
        <div className="m-1">guid: {props.boss_kills_player.guid}</div>
      </div>
      <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-700">
        <div
          className="h-3 text-xs font-medium text-blue-200 text-center p-0.5 leading-none rounded-full"
          style={{
            width: props.width_percent,
            backgroundColor: matchClassColor(
              parse_class(
                parseInt(props.boss_kills_player.talent_spec.toString())
              )
            ),
          }}
        ></div>
      </div>
      <div>
        <p>{props.boss_kills_player.dispels.toString()}</p>
      </div>
    </div>
  );
}
