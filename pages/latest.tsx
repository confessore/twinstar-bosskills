import { boss_kills } from "@/prisma/bosskills";
import { get_latest_boss_kills } from "@/utils/bosskills.db";
import BossKillsWidget from "@/components/boss_kills_widget";
import Layout from "@/components/layout";
import { Suspense } from "react";
import Loading from "@/components/loading";

type Props = {
  boss_kills: boss_kills[];
};

export const getServerSideProps = async (context: any) => {
  let boss_kills;
  try {
    boss_kills = await get_latest_boss_kills();
  } catch {
    return {
      props: {},
    };
  }
  return {
    props: {
      boss_kills,
    },
  };
};

export default function Latest(props: Props) {
  return (
    <Suspense fallback={Loading()}>
      {props !== undefined && props.boss_kills !== undefined && (
        <div className="flex flex-col">
          <div className="flex w-full flex-wrap justify-center">
            <BossKillsWidget latest_boss_kills={props.boss_kills} />
          </div>
        </div>
      )}
    </Suspense>
  );
}
