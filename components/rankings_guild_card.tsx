import { boss_kills_rankings_guild } from "@/prisma/bosskills";

type Props = {
  boss_kills_rankings_guild: boss_kills_rankings_guild;
};

export default function RankingsGuildCard(props: Props) {
  return (
    <div className="m-0.5 flex items-center justify-between bg-slate-500">
      <div className="m-0.5 flex flex-col">
        <div className="m-0.5 flex text-lg font-bold">
          <p className="text-2xl font-bold">
            {props.boss_kills_rankings_guild.guild?.toString()}
          </p>
        </div>
        <div className="m-0.5 flex text-lg">
          <p className="">
            <strong>
              {props.boss_kills_rankings_guild.points?.toString()}
            </strong>{" "}
            Points
          </p>
        </div>
      </div>
      <div className="m-0.5 flex text-xl">
        <p>
          Rank{" "}
          <strong>{props.boss_kills_rankings_guild.ranking?.toString()}</strong>
        </p>
      </div>
    </div>
  );
}
