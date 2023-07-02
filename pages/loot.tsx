import Loading from "@/components/loading";
import { boss_kills_loot } from "@/prisma/bosskills";
import { get_loot_count } from "@/utils/bosskills.db";
import { Suspense, useEffect, useState } from "react";
import Image from 'next/image'

type Props = {
  item: any;
  loot_count: number;
};

export const getServerSideProps = async (context: any) => {
  let item;
  let loot_count;
  try {
    item = await getItem(87209);
    loot_count = await get_loot_count(87209);
  } catch {
    return {
      props: {},
    };
  }
  return {
    props: { item, loot_count },
  };
};

const itemIds = [
  87209,
  86888,
  86889
]

export default function Loot(props: Props) {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sources, setSources] = useState(new Array<string>())
  const [calling, setCalling] = useState(false)

  useEffect(() => {
    if (!loaded && !loading) {
      setLoading(true);
      try {
        for (let i = 0; i < itemIds.length; i++) {
          getIconUrl(itemIds[i]).then((url) => {
            sources.push(url);
            setSources(sources);
          })
        }
      } catch {

      } finally {
        for (let i = 0; i < itemIds.length; i++) {
          URL.revokeObjectURL(sources[i]);
        }
        setLoading(false);
        setLoaded(true);
      }
    }
  }, [])
  return (
    <Suspense fallback={Loading()}>
      {props !== undefined && props.loot_count !== undefined && (
        <div className="flex flex-wrap">
          <div className="flex w-full flex-wrap justify-center">{props.loot_count} instances of {props.item['itemSparse']['Name']} exist</div>
          {loaded && !loading && sources.length > 0 && (
          sources.map((source, index) => 
             (<Image key={index} src={source} alt="" width={64} height={64} />)))}
        </div>
      )}
    </Suspense>
  );
}

async function getItem(itemId: number) {
  const res = await fetch(`https://twinstar-api.twinstar-wow.com/item/${itemId}`);
  return res.json();
}

async function getIconUrl(itemId: number) {
  const res = await fetch(`https://twinstar-api.twinstar-wow.com/item/icon/${itemId}`);
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  return url;
}