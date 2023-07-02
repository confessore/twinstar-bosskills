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

export default function Loot(props: Props) {
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState('/twinstar.png');
  useEffect(() => {
    if (!loaded) {
      try {
        getIcon(87209).then((url) => {
          setSrc(url);
          console.log(url)
        })
      } catch {

      } finally {
        setLoaded(true);
      }
    }
  })
  return (
    <Suspense fallback={Loading()}>
      {props !== undefined && props.loot_count !== undefined && (
        <div className="flex flex-wrap">
          <div className="flex w-full flex-wrap justify-center">{props.loot_count} instances of {props.item['itemSparse']['Name']} exist</div>
          <Image src={src} alt="" width={64} height={64} />
        </div>
      )}
    </Suspense>
  );
}

async function getItem(itemId: number) {
  const res = await fetch(`https://twinstar-api.twinstar-wow.com/item/${itemId}`);
  return res.json();
}

async function getIcon(itemId: number) {
  const res = await fetch(`https://twinstar-api.twinstar-wow.com/item/icon/${itemId}`);
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  return url;
}