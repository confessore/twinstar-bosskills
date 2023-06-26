import { boss_kills } from "@/prisma/bosskills";
import { parse_boss, parse_mode, parse_mode_color } from "@/styles/colors";
import Link from "next/link";

type Props = {
  boss_kills: boss_kills;
};

export default function BossKillsCard(props: Props) {
  return (
    <Link
      href={`/boss_kill/${props.boss_kills.id?.toString()}`}
      className="m-0.5 flex flex-col"
      prefetch={false}
    >
      <div
        className="absolute h-[120px] w-96 max-w-full border-2 border-black opacity-10"
        style={{ backgroundColor: parse_mode_color(props.boss_kills.mode) }}
      ></div>
      <p className="m-0.5 text-start text-xs">
        <strong>{props.boss_kills.time?.toString()}</strong>
      </p>
      <p className="m-0.5 text-end text-3xl font-bold">
        {parse_boss(props.boss_kills.entry)}
      </p>
      <p className="m-0.5 text-end text-xl font-bold"
      style={{ color: parse_mode_color(props.boss_kills.mode) }}>
        {parse_mode(props.boss_kills.mode)}
      </p>
      <p className="m-0.5 text-end text-lg">
        Slain by{" "}
        <strong>
          {props.boss_kills.guild !== ""
            ? props.boss_kills.guild
            : "a ragtag band of misfits"}
        </strong>
      </p>
    </Link>
  );
}
