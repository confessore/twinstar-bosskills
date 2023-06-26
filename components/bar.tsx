import { boss_kills_players } from "@/prisma/bosskills";
import Image from "next/image";
import {
  matchClassColor,
  parse_class,
  parse_class_image,
  parse_talent_specialization_image,
} from "@/styles/colors";

type Props = {
  boss_kills_player: boss_kills_players;
  character_name: string;
  width_percent: string;
  value: string;
  length: number;
};

export default function Bar(props: Props) {
  return (
    <div className="flex w-full flex-col">
      <div
        className="absolute h-20 w-96 max-w-full border-2 border-black opacity-10 hover:animate-pulse"
        style={{
          backgroundColor: matchClassColor(
            parse_class(props.boss_kills_player.talent_spec)
          ),
        }}
      ></div>
      <div className="flex">
        <Image
          src={parse_class_image(props.boss_kills_player.talent_spec)}
          alt=""
          width={32}
          height={32}
          className="m-0.5 rounded-full"
        />
        <Image
          src={parse_talent_specialization_image(
            props.boss_kills_player.talent_spec
          )}
          alt=""
          width={32}
          height={32}
          className="m-0.5 rounded-full"
        />
        <div className="m-0.5 text-lg font-bold">{props.character_name}</div>
      </div>
      <div className="m-0.5 h-3 rounded-full bg-stone-500">
        <div
          className="h-3 rounded-full p-0.5 text-center text-xs font-medium leading-none"
          style={{
            width: props.width_percent,
            backgroundColor: matchClassColor(
              parse_class(props.boss_kills_player.talent_spec)
            ),
          }}
        ></div>
      </div>
      <div className="m-0.5 flex justify-between">
        <p className="m-0.5 font-medium">{props.value}</p>
        <p className="m-0.5 font-medium">
          {Math.ceil(parseInt(props.value) / (props.length / 1000))}/s
        </p>
        <p className="m-0.5 font-medium">
          {props.boss_kills_player.usefullTime}s
        </p>
        <p className="m-0.5 font-medium">
          {props.boss_kills_player.avg_item_lvl}ilvl
        </p>
      </div>
    </div>
  );
}
