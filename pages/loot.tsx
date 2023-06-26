import Loading from "@/components/loading";
import { Suspense } from "react";

type Props = {};

export const getServerSideProps = async (context: any) => {
  try {
  } catch {
    return {
      props: {},
    };
  }
  return {
    props: {},
  };
};

export default function Loot(props: Props) {
  return (
    <Suspense fallback={Loading()}>
      {props !== undefined && (
        <div className="flex flex-wrap">
          <div className="flex w-full flex-wrap justify-center"></div>
        </div>
      )}
    </Suspense>
  );
}
