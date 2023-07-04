import { boss_kills, boss_kills_loot, boss_kills_players } from "@/prisma/bosskills";
import {
  get_boss_kill_by_id,
  get_boss_kill_loot,
  get_boss_kill_players as get_boss_kills_players,
} from "@/utils/bosskills.db";
import DamageDoneWidget from "@/components/damage_done_widget";
import HealingDoneWidget from "@/components/healing_done_widget";
import DamageTakenWidget from "@/components/damage_taken_widget";
import HealingTakenWidget from "@/components/healing_taken_widget";
import InterruptsWidget from "@/components/interrupts_widget";
import DispelsWidget from "@/components/dispels_widget";
import { get_characters } from "@/utils/characters.db";
import { characters } from "@/prisma/characters";
import { Suspense, useState } from "react";
import BossKillsInfo from "@/components/boss_kills_info";
import OverhealingDoneWidget from "@/components/overhealing_done_widget";
import Loading from "@/components/loading";
import ItemIcon from "@/components/item_icon";

type Props = {
  boss_kills: boss_kills;
  boss_kills_players: boss_kills_players[];
  characters: characters[];
  loot: boss_kills_loot[];
};

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = parseInt(params.id);
  let boss_kills;
  let boss_kills_players;
  let characters;
  let loot;
  try {
    boss_kills = await get_boss_kill_by_id(id);
    boss_kills_players = await get_boss_kills_players(id);
    characters = await get_characters(boss_kills_players);
    loot = await get_boss_kill_loot(id);
  } catch {
    return {
      props: {},
    };
  }
  return {
    props: { boss_kills, boss_kills_players, characters, loot }, // will be passed to the page component as props
  };
}

const button_style =
  "m-0.5 bg-slate-500 hover:bg-slate-700 font-bold py-2 px-3 rounded";

export default function Page(props: Props) {
  const [tab, setTab] = useState(0);

  return (
    <Suspense fallback={Loading()}>
      {props !== undefined && props.boss_kills_players !== undefined && (
        <div className="flex flex-col">
          <div className="flex w-full flex-wrap justify-center">
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
          <div className="flex justify-center items-center">
            {props.loot.map((boss_kills_loot, index) => {
              return (<ItemIcon key={index} itemId={boss_kills_loot.itemId} />);
            })}
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
    </Suspense>
  );
}
