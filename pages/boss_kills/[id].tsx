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
import { useState } from "react";
import BossKillsInfo from "@/components/boss_kills_info";
import OverhealingDoneWidget from "@/components/overhealing_done_widget";

type Props = {
  boss_kills: boss_kills;
  boss_kills_players: boss_kills_players[];
  characters: characters[];
};

const button_style =
  "m-0.5 bg-slate-500 hover:bg-slate-700 font-bold py-2 px-3 rounded";

export default function Page(props: Props) {
  const [tab, setTab] = useState(0);

  return (
    <Layout>
      {props !== undefined && props.boss_kills_players !== undefined && (
        <div className="flex flex-col">
          <div className="flex flex-wrap justify-center">
            <button className={`${button_style}`} onClick={() => setTab(0)}>
              Damage Done
            </button>
            <button className={`${button_style}`} onClick={() => setTab(1)}>
              Healing Done
            </button>
            <button className={`${button_style}`} onClick={() => setTab(5)}>
              Dispels
            </button>
            <button className={`${button_style}`} onClick={() => setTab(2)}>
              Damage Taken
            </button>
            <button className={`${button_style}`} onClick={() => setTab(3)}>
              Healing Taken
            </button>
            <button className={`${button_style}`} onClick={() => setTab(4)}>
              Interrupts
            </button>
            <button className={`${button_style}`} onClick={() => setTab(6)}>
              Overhealing Done
            </button>
          </div>
          {tab === 0 && (
            <div className="flex w-full flex-wrap justify-center">
              <BossKillsInfo boss_kills={props.boss_kills} />
              <DamageDoneWidget
                boss_kills={props.boss_kills}
                boss_kills_players={props.boss_kills_players}
                characters={props.characters}
              />
            </div>
          )}
          {tab === 1 && (
            <div className="flex w-full flex-wrap justify-center">
              <BossKillsInfo boss_kills={props.boss_kills} />
              <HealingDoneWidget
                boss_kills={props.boss_kills}
                boss_kills_players={props.boss_kills_players}
                characters={props.characters}
              />
            </div>
          )}
          {tab === 2 && (
            <div className="flex w-full flex-wrap justify-center">
              <BossKillsInfo boss_kills={props.boss_kills} />
              <DamageTakenWidget
                boss_kills={props.boss_kills}
                boss_kills_players={props.boss_kills_players}
                characters={props.characters}
              />
            </div>
          )}
          {tab === 3 && (
            <div className="flex w-full flex-wrap justify-center">
              <BossKillsInfo boss_kills={props.boss_kills} />
              <HealingTakenWidget
                boss_kills={props.boss_kills}
                boss_kills_players={props.boss_kills_players}
                characters={props.characters}
              />
            </div>
          )}
          {tab === 4 && (
            <div className="flex w-full flex-wrap justify-center">
              <BossKillsInfo boss_kills={props.boss_kills} />
              <InterruptsWidget
                boss_kills={props.boss_kills}
                boss_kills_players={props.boss_kills_players}
                characters={props.characters}
              />
            </div>
          )}
          {tab === 5 && (
            <div className="flex w-full flex-wrap justify-center">
              <BossKillsInfo boss_kills={props.boss_kills} />
              <DispelsWidget
                boss_kills={props.boss_kills}
                boss_kills_players={props.boss_kills_players}
                characters={props.characters}
              />
            </div>
          )}
          {tab === 6 && (
            <div className="flex w-full flex-wrap justify-center">
              <BossKillsInfo boss_kills={props.boss_kills} />
              <OverhealingDoneWidget
                boss_kills={props.boss_kills}
                boss_kills_players={props.boss_kills_players}
                characters={props.characters}
              />
            </div>
          )}
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
