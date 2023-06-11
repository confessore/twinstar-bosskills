import { boss_kills, boss_kills_players } from "@/prisma/bosskills";
import {
  get_all_boss_kills_ids,
  get_boss_kill_by_id,
  get_boss_kill_players as get_boss_kills_players,
} from "@/utils/bosskills.db";
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
  boss_kills: boss_kills;
  boss_kills_players: boss_kills_players[];
  characters: characters[];
};

export default function Page(props: Props) {
  return (
    <Layout>
      {props !== undefined && props.boss_kills_players !== undefined && (
        <div className="m-1 flex flex-wrap p-1">
          <DamageDoneWidget
            boss_kills={props.boss_kills}
            boss_kills_players={props.boss_kills_players}
            characters={props.characters}
          />
          <HealingDoneWidget
            boss_kills={props.boss_kills}
            boss_kills_players={props.boss_kills_players}
            characters={props.characters}
          />
          <DamageTakenWidget
            boss_kills={props.boss_kills}
            boss_kills_players={props.boss_kills_players}
            characters={props.characters}
          />
          <HealingTakenWidget
            boss_kills={props.boss_kills}
            boss_kills_players={props.boss_kills_players}
            characters={props.characters}
          />
          <InterruptsWidget
            boss_kills={props.boss_kills}
            boss_kills_players={props.boss_kills_players}
            characters={props.characters}
          />
          <DispelsWidget
            boss_kills={props.boss_kills}
            boss_kills_players={props.boss_kills_players}
            characters={props.characters}
          />
        </div>
      )}
    </Layout>
  );
}

/*export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  // Call an external API endpoint to get posts
  let boss_kills_ids = await get_all_boss_kills_ids();

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = boss_kills_ids.map((boss_kills_id_object) => ({
    params: { id: boss_kills_id_object.id.toString() },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}*/

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = parseInt(params.id);
  const boss_kills = await get_boss_kill_by_id(id);
  const boss_kills_players = await get_boss_kills_players(id);
  const characters = await get_characters(boss_kills_players);
  return {
    props: { boss_kills, boss_kills_players, characters }, // will be passed to the page component as props
  };
}
