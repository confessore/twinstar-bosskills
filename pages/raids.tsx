import "@/app/globals.css";
import {
  boss_kills,
  PrismaClient as bosskillsPrismaClient,
} from "@/prisma/bosskills";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { getURL, getData } from "@/utils/helpers";
import { get_latest_boss_kills } from "@/utils/bosskills.db";
import LatestBossKillsWidget from "@/components/latest_boss_kills_widget";
import Layout from "@/components/layout";
import RaidsWidget from "@/components/raids_widget";

type Props = {
  latest_boss_kills: boss_kills[];
};

export const getServerSideProps = async (context: any) => {
  const latest_boss_kills = await get_latest_boss_kills();
  return {
    props: {
      latest_boss_kills,
    },
  };
};

export default function Raids(props: Props) {
  return (
    <Layout>
      {props !== undefined && props.latest_boss_kills !== undefined && (
        <div className="flex flex-col">
          <div className="flex w-full flex-wrap justify-center">
            <RaidsWidget />
          </div>
        </div>
      )}
    </Layout>
  );
}
