import Loading from "@/components/loading";
import { boss_kills_rankings_guild } from "@/prisma/bosskills";
import { get_boss_kills_rankings_guild } from "@/utils/bosskills.db";
import { get_character } from "@/utils/characters.db";
import { Suspense } from "react";

type Props = {
  boss_kills_rankings_guild: boss_kills_rankings_guild;
};

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  const name = decodeURI(params.name);
  let boss_kills_rankings_guild;
  try {
    boss_kills_rankings_guild = await get_boss_kills_rankings_guild(name);
  } catch {
    return {
      props: {},
    };
  }
  return {
    props: { boss_kills_rankings_guild },
  };
};

export default function Page(props: Props) {
  return (
    <Suspense fallback={Loading()}>
      {props !== undefined && props.boss_kills_rankings_guild !== undefined && (
        <div className="flex flex-wrap">
          <div className="flex w-full flex-wrap justify-center">
            {props.boss_kills_rankings_guild.guild}
          </div>
        </div>
      )}
    </Suspense>
  );
}
