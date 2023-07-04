import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  itemId: number;
};

export default function ItemIcon(props: Props) {
    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [source, setSource] = useState('/twinstar.png')

    useEffect(() => {
        if (!loaded && !loading) {
          setLoading(true);
          try {
            const fn = async () => {
              const url = await getIconUrl(props.itemId);
              setSource(url);
            }
            fn();
          } catch {
            console.log(console.error);
          } finally {
            URL.revokeObjectURL(source);
            setLoading(false);
            setLoaded(true);
          }
        }
      }, [])

  return (
    <>
        {loaded && !loading && (
            <Image
                src={source}
                alt=''
                width={128}
                height={128} />
        )}
    </>
  );
}

async function getIconUrl(itemId: number) {
    const res = await fetch(`https://twinstar-api.twinstar-wow.com/item/icon/${itemId}`);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    return url;
  }