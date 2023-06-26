import BossKillsWidget from "@/components/boss_kills_widget";
import Loading from "@/components/loading";
import RankingsGuildWidget from "@/components/rankings_guild_widget";
import { boss_kills, boss_kills_rankings_guild } from "@/prisma/bosskills";
import {
  get_boss_kills_rankings_guilds,
  get_latest_boss_kills,
} from "@/utils/bosskills.db";
import { Suspense } from "react";

export const metadata = {
  title: "TwinStar WoW Boss Kills",
  description: "",
};

type Props = {
  boss_kills: boss_kills[];
  boss_kills_rankings_guilds: boss_kills_rankings_guild[];
};

export const getServerSideProps = async (context: any) => {
  let boss_kills;
  let boss_kills_rankings_guilds;
  try {
    boss_kills = await get_latest_boss_kills();
    boss_kills_rankings_guilds = await get_boss_kills_rankings_guilds();
  } catch {
    return {
      props: {},
    };
  }
  return {
    props: {
      boss_kills,
      boss_kills_rankings_guilds,
    },
  };
};

export default function Home(props: Props) {
  return (
    <Suspense fallback={Loading()}>
      {props !== undefined &&
        props.boss_kills !== undefined &&
        props.boss_kills_rankings_guilds !== undefined && (
          <div className="flex flex-col">
            <div className="flex w-full flex-wrap items-start justify-center">
              <BossKillsWidget latest_boss_kills={props.boss_kills} />
              <RankingsGuildWidget
                boss_kills_rankings_guilds={props.boss_kills_rankings_guilds}
              />
            </div>
          </div>
        )}
    </Suspense>
  );
}
