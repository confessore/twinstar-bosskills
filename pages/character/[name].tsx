import Loading from "@/components/loading";
import { characters } from "@/prisma/characters";
import { get_character } from "@/utils/characters.db";
import { Suspense } from "react";

type Props = {
  character: characters;
};

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  const name = params.name;
  let character;
  try {
    character = await get_character(name);
  } catch {
    return {
      props: {},
    };
  }
  return {
    props: { character },
  };
};

export default function Page(props: Props) {
  return (
    <Suspense fallback={Loading()}>
      {props !== undefined && props.character !== undefined && (
        <div className="flex flex-wrap">
          <div className="flex w-full flex-wrap justify-center">
            {props.character.name}
          </div>
        </div>
      )}
    </Suspense>
  );
}
