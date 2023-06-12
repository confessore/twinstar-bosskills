import "@/app/globals.css";
import {
  boss_kills,
  boss_kills_rankings_guild,
  PrismaClient as bosskillsPrismaClient,
} from "@/prisma/bosskills";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { getURL, getData } from "@/utils/helpers";
import {
  get_boss_kills_rankings_guilds,
  get_latest_boss_kills,
} from "@/utils/bosskills.db";
import LatestBossKillsWidget from "@/components/latest_boss_kills_widget";
import Layout from "@/components/layout";
import BossKillsRankingsGuildWidget from "@/components/boss_kills_rankings_guild_widget";

type Props = {
  boss_kills_rankings_guilds: boss_kills_rankings_guild[];
};

export const getServerSideProps = async (context: any) => {
  const boss_kills_rankings_guilds = await get_boss_kills_rankings_guilds();
  return {
    props: {
      boss_kills_rankings_guilds,
    },
  };
};

export default function Guilds(props: Props) {
  return (
    <Layout>
      {props !== undefined &&
        props.boss_kills_rankings_guilds !== undefined && (
          <div className="flex flex-wrap">
            <BossKillsRankingsGuildWidget
              boss_kills_rankings_guilds={props.boss_kills_rankings_guilds}
            />
          </div>
        )}
    </Layout>
  );
}
