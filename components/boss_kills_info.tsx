import { boss_kills } from "@/prisma/bosskills";
import { parse_boss, parse_mode, parse_mode_color } from "@/styles/colors";

type Props = {
  boss_kills: boss_kills;
};

export default function BossKillsInfo(props: Props) {
  return (
    <div className="m-0.5 flex w-96 max-w-full flex-col text-start">
      <div
        className="absolute h-40 w-96 max-w-full border-2 border-black opacity-10 hover:animate-pulse"
        style={{ backgroundColor: parse_mode_color(props.boss_kills.mode) }}
      ></div>
      <p className="m-0.5 text-xs">
        <strong>{props.boss_kills.time?.toString()}</strong>
      </p>
      <p className="m-0.5 text-3xl font-bold">
        {parse_boss(props.boss_kills.entry)}
      </p>
      <p className="m-0.5 text-xl font-bold">
        {parse_mode(props.boss_kills.mode)}
      </p>
      <p className="m-0.5 text-lg">
        Slain by{" "}
        <strong>
          {props.boss_kills.guild !== ""
            ? props.boss_kills.guild
            : "a ragtag band of misfits"}{" "}
        </strong>
        in <strong>{props.boss_kills.length / 1000}s </strong>
      </p>
      <p className="m-0.5">
        <strong> {props.boss_kills.deaths}</strong> Deaths |
        <strong> {props.boss_kills.ressUsed}</strong> Resurrects |
        <strong> {props.boss_kills.wipes}</strong> Wipes
      </p>
    </div>
  );
}
