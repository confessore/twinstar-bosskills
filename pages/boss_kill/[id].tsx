import { boss_kills_players } from '@/prisma/bosskills';
import { get_boss_kill_players } from '@/utils/bosskills.db';
import { useRouter } from 'next/router';


type Props = {
  boss_kill_players: boss_kills_players[]
}

export default function Page(props: any) {
  return (
    <>
      {(props !== undefined && props.boss_kill_players !== undefined) &&
      <> 
        {props.boss_kill_players.map((player: boss_kills_players, index: any) => {
            return (
              <div key={index} className='flex flex-wrap gap-3'>
                <p>{player.id?.toString()}</p>
                <p>{player.dmgDone?.toString()}</p>
                <p>{player.talent_spec?.toString()}</p>
              </div>
            );
          }
      )}
      </>
    }
    </>
  )
}

export async function getServerSideProps(context: any) {
  let id = context.query.id
  let boss_kill_players = await get_boss_kill_players(parseInt(id))
  return {
    props: { boss_kill_players: JSON.parse(boss_kill_players) }, // will be passed to the page component as props
  };
}