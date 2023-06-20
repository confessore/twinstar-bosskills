import "@/app/globals.css";
import { boss_kills_rankings_guild } from "@/prisma/bosskills";
import { get_boss_kills_rankings_guilds } from "@/utils/bosskills.db";
import Layout from "@/components/layout";
import BossKillsRankingsGuildWidget from "@/components/rankings_guild_widget";
import Loading from "@/components/loading";
import { Suspense } from "react";

type Props = {
  boss_kills_rankings_guilds: boss_kills_rankings_guild[];
};

export const getServerSideProps = async (context: any) => {
  let boss_kills_rankings_guilds;
  try {
    boss_kills_rankings_guilds = await get_boss_kills_rankings_guilds();
  } catch {
    return {
      props: {},
    };
  }
  return {
    props: {
      boss_kills_rankings_guilds,
    },
  };
};

export default function Guilds(props: Props) {
  return (
    <Layout>
      <Suspense fallback={Loading()}>
        {props !== undefined &&
          props.boss_kills_rankings_guilds !== undefined && (
            <div className="flex flex-wrap">
              <div className="flex w-full flex-wrap justify-center">
                <BossKillsRankingsGuildWidget
                  boss_kills_rankings_guilds={props.boss_kills_rankings_guilds}
                />
              </div>
            </div>
          )}
      </Suspense>
    </Layout>
  );
}
