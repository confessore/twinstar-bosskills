import { boss_kills } from "@/prisma/bosskills";
import { Suspense } from "react";
import { get_all_boss_kills_by_entry_and_mode } from "@/utils/bosskills.db";
import BossKillsWidget from "@/components/boss_kills_widget";
import Loading from "@/components/loading";

type Props = {
  boss_kills: boss_kills[];
};

export async function getServerSideProps(context: any) {
  const { params } = context;
  const entry = parseInt(params.entry);
  const mode = parseInt(params.mode);
  let boss_kills;
  try {
    boss_kills = await get_all_boss_kills_by_entry_and_mode(entry, mode);
  } catch {
    return {
      props: {},
    };
  }
  return {
    props: { boss_kills }, // will be passed to the page component as props
  };
}

export default function Page(props: Props) {
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
