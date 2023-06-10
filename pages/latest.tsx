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

type Data = {
  latest_boss_kills: boss_kills[];
};

export const getStaticProps: GetStaticProps<{
  data: Data;
}> = async () => {
  return {
    props: {
      data: { latest_boss_kills: JSON.parse(await get_latest_boss_kills()) },
    },
  };
};

export default function Latest({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      {data !== undefined && data.latest_boss_kills !== undefined && (
        <div className="m-1 flex flex-wrap">
          <LatestBossKillsWidget latest_boss_kills={data.latest_boss_kills} />
        </div>
      )}
    </Layout>
  );
}
