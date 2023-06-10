import { boss_kills, boss_kills_players } from "@/prisma/bosskills";
import Image from "next/image";
import Link from "next/link";
import {
  matchClassColor,
  parse_class,
  parse_class_image,
  parse_talent_specialization,
  parse_talent_specialization_image,
} from "@/styles/colors";
import { characters } from "@/prisma/characters";

type Props = {
  boss_kills_player: boss_kills_players;
  character_name: string;
  width_percent: string;
  value: string;
};

export default function Bar(props: Props) {
  return (
    <div className="m-1 w-72">
      <div className="m-1 flex">
      <Image
          src={parse_class_image(
            props.boss_kills_player.talent_spec
          )}
          alt=""
          width={24}
          height={24}
          className="m-1"
        />
        <Image
          src={parse_talent_specialization_image(
            props.boss_kills_player.talent_spec
          )}
          alt=""
          width={24}
          height={24}
          className="m-1"
        />
        <div className="m-1">{props.character_name}</div>
      </div>
      <div className="h-3 rounded-full bg-gray-300 dark:bg-gray-700">
        <div
          className="h-3 rounded-full p-0.5 text-center text-xs font-medium leading-none text-blue-200"
          style={{
            width: props.width_percent,
            backgroundColor: matchClassColor(
              parse_class(props.boss_kills_player.talent_spec)
            ),
          }}
        ></div>
      </div>
      <div>
        <p>{props.value}</p>
      </div>
    </div>
  );
}
