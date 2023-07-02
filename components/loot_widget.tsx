import { boss_kills_rankings_guild } from "@/prisma/bosskills";
import RankingsGuildCard from "./rankings_guild_card";

type Props = {
  id: number
};

export default function LootWidget(props: Props) {
  return (
    <div className="m-0.5 flex w-96 max-w-full flex-col justify-center">
      <p className="m-0.5 text-xl font-bold">Loot</p>
      <div>
        
      </div>
    </div>
  );
}
