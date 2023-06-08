import { boss_kills_players } from "@/prisma/bosskills";
import { get_boss_kill_players as get_boss_kills_players } from "@/utils/bosskills.db";
import { useRouter } from "next/router";
import "@/app/globals.css";
import Layout from "@/components/layout";
import DamageDoneBar from "@/components/damage_done_bar";
import DamageDoneWidget from "@/components/damage_done_widget";

type Props = {
  boss_kills_players: boss_kills_players[];
};

export default function Page(props: Props) {
  return (
    <Layout>
      {props !== undefined && props.boss_kills_players !== undefined && (
        <DamageDoneWidget boss_kills_players={props.boss_kills_players} />
      )}
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  let id = context.query.id;
  let boss_kills_players = await get_boss_kills_players(parseInt(id));
  return {
    props: { boss_kills_players: JSON.parse(boss_kills_players) }, // will be passed to the page component as props
  };
}
