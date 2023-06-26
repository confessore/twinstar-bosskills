import Loading from "@/components/loading";
import { boss_kills_loot } from "@/prisma/bosskills";
import { get_loot_count } from "@/utils/bosskills.db";
import { Suspense } from "react";

type Props = {
  loot_count: number
};

export const getServerSideProps = async (context: any) => {
  let loot_count;
  try {
    loot_count = await get_loot_count(87209);
    console.log(loot_count)
  } catch {
    return {
      props: {},
    };
  }
  return {
    props: { loot_count },
  };
};

export default function Loot(props: Props) {
  return (
    <Suspense fallback={Loading()}>
      {props !== undefined && props.loot_count !== undefined && (
        <div className="flex flex-wrap">
          <div className="flex w-full flex-wrap justify-center">{props.loot_count} instances of 87209 exist</div>
        </div>
      )}
    </Suspense>
  );
}
