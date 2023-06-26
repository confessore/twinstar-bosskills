import { boss_kills_rankings_guild } from "@/prisma/bosskills";
import { parse_rank_color } from "@/styles/colors";

type Props = {
  boss_kills_rankings_guild: boss_kills_rankings_guild;
};

export default function RankingsGuildCard(props: Props) {
  return (
    <div
      className="m-0.5 flex items-center justify-between"
      style={{
        color: parse_rank_color(props.boss_kills_rankings_guild.ranking),
      }}
    >
      <div className="m-0.5 flex flex-col">
        <div
          className="absolute h-[72px] w-96 max-w-full border-2 border-black opacity-10"
          style={{
            backgroundColor: parse_rank_color(
              props.boss_kills_rankings_guild.ranking
            ),
          }}
        ></div>
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
