import { boss_kills_players } from "@/prisma/bosskills";
import { get_boss_kill_players as get_boss_kills_players } from "@/utils/bosskills.db";
import { useRouter } from "next/router";
import "@/app/globals.css";
import Layout from "@/components/layout";
import DamageDoneWidget from "@/components/damage_done_widget";
import HealingDoneWidget from "@/components/healing_done_widget";
import DamageTakenWidget from "@/components/damage_taken_widget";
import HealingTakenWidget from "@/components/healing_taken_widget";
import InterruptsWidget from "@/components/interrupts_widget";
import DispelsWidget from "@/components/dispels_widget";
import { get_characters } from "@/utils/characters.db";
import { characters } from "@/prisma/characters";

type Props = {
  boss_kills_players: boss_kills_players[];
  characters: characters[];
};

export default function Page(props: Props) {
  return (
    <Layout>
      {props !== undefined && props.boss_kills_players !== undefined && (
        <div className="m-1 flex flex-wrap p-1">
          <DamageDoneWidget
            boss_kills_players={props.boss_kills_players}
            characters={props.characters}
          />
          <HealingDoneWidget
            boss_kills_players={props.boss_kills_players}
            characters={props.characters}
          />
          <DamageTakenWidget
            boss_kills_players={props.boss_kills_players}
            characters={props.characters}
          />
          <HealingTakenWidget
            boss_kills_players={props.boss_kills_players}
            characters={props.characters}
          />
          <InterruptsWidget
            boss_kills_players={props.boss_kills_players}
            characters={props.characters}
          />
          <DispelsWidget
            boss_kills_players={props.boss_kills_players}
            characters={props.characters}
          />
        </div>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  let id = context.query.id;
  let boss_kills_players_json = await get_boss_kills_players(parseInt(id));
  let boss_kills_players = JSON.parse(boss_kills_players_json);
  let characters = await get_characters(boss_kills_players);
  return {
    props: { boss_kills_players, characters }, // will be passed to the page component as props
  };
}
