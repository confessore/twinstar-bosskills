import { boss_kills_players } from "@/prisma/bosskills";
import { get_boss_kill_players as get_boss_kills_players } from "@/utils/bosskills.db";
import { useRouter } from "next/router";
import "@/app/globals.css";
import Layout from "@/components/layout";
import DamageDoneBar from "@/components/damage_done_bar";
import DamageDoneWidget from "@/components/damage_done_widget";
import HealingDoneWidget from "@/components/healing_done_widget";
import DamageTakenWidget from "@/components/damage_taken_widget";
import HealingTakenWidget from "@/components/healing_taken_widget";
import InterruptsWidget from "@/components/interrupts_widget";
import DispelsWidget from "@/components/dispels_widget";

type Props = {
  boss_kills_players: boss_kills_players[];
};

export default function Page(props: Props) {
  return (
    <Layout>
      {props !== undefined && props.boss_kills_players !== undefined && (
        <div className="flex flex-wrap m-1 p-1">
          <DamageDoneWidget boss_kills_players={props.boss_kills_players} />
          <HealingDoneWidget boss_kills_players={props.boss_kills_players} />
          <DamageTakenWidget boss_kills_players={props.boss_kills_players} />
          <HealingTakenWidget boss_kills_players={props.boss_kills_players} />
          <InterruptsWidget boss_kills_players={props.boss_kills_players} />
          <DispelsWidget boss_kills_players={props.boss_kills_players} />
        </div>
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
