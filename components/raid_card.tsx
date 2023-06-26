import { boss_kills } from "@/prisma/bosskills";
import { parse_boss, parse_mode, parse_mode_color } from "@/styles/colors";
import Link from "next/link";

type Props = {
  value: number;
  mode: number;
};

export default function RaidCard(props: Props) {
  return (
    <Link
      href={`boss_kills/${props.value.toString()}/${props.mode}`}
      className="m-0.5 flex flex-col"
      prefetch={false}
    >
      <div
        className="absolute h-20 w-96 max-w-full border-2 border-black opacity-10 hover:animate-pulse"
        style={{ backgroundColor: parse_mode_color(props.mode) }}
      ></div>
      <p className="m-0.5 text-start text-xs">
        <strong>{""}</strong>
      </p>
      <p className="m-0.5 text-end text-3xl font-bold">
        {parse_boss(props.value)}
      </p>
      <p
        className={`m-0.5 text-end text-xl font-bold`}
        style={{ color: parse_mode_color(props.mode) }}
      >
        {parse_mode(props.mode)}
      </p>
      <p className="m-0.5 text-end text-lg">
        <strong>{""}</strong>
      </p>
    </Link>
  );
}
