import "@/app/globals.css";
import Layout from "@/components/layout";
import Loading from "@/components/loading";
import RaidsWidget from "@/components/raids_widget";
import { boss_kills } from "@/prisma/bosskills";
import { Suspense } from "react";

type Props = {
  latest_boss_kills: boss_kills[];
};

export const getServerSideProps = async (context: any) => {
  return {
    props: {},
  };
};

export default function Raids(props: Props) {
  return (
    <Layout>
      <Suspense fallback={Loading()}>
        {props !== undefined && (
          <div className="flex flex-col">
            <div className="flex w-full flex-wrap justify-center">
              <RaidsWidget />
            </div>
          </div>
        )}
      </Suspense>
    </Layout>
  );
}
