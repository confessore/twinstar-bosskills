import "../app/globals.css"
import { boss_kills, PrismaClient as bosskillsPrismaClient } from '@/prisma/bosskills'
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { getURL, getData } from "../utils/helpers"
import { get_latest_boss_kills } from "@/utils/bosskills.db";
 
type Data = {
  latest_boss_kills: boss_kills[]
};
 
export const getStaticProps: GetStaticProps<{
  data: Data;
}> = async () => {
  return { props: { data: { latest_boss_kills: JSON.parse(await get_latest_boss_kills()) } } }
};
 
export default function Latest({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
        {(data !== undefined && data.latest_boss_kills !== undefined) &&
        <> 
          {data.latest_boss_kills.map((boss_kill, index) => {
            return (
              <div key={index} className='flex flex-wrap gap-3'>
                <p>{boss_kill.id?.toString()}</p>
                <p>{boss_kill.realm?.toString()}</p>
                <p>{boss_kill.guild?.toString()}</p>
                <p>{boss_kill.time?.toString()}</p>
              </div>
            );
          }
        )}
        </>
        }
    </>
    )
}
