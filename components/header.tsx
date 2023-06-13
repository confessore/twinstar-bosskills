import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col">
      <div className="flex">TwinStar WoW Boss Kills</div>
      <div className="flex flex-wrap">
        <Link href="/" className="m-2" prefetch={false}>
          Home
        </Link>
        <Link href="/latest" className="m-2" prefetch={false}>
          Latest
        </Link>
        <Link href="/raids" className="m-2" prefetch={false}>
          Raids
        </Link>
        <Link href="/characters" className="m-2" prefetch={false}>
          Characters
        </Link>
        <Link href="/guilds" className="m-2" prefetch={false}>
          Guilds
        </Link>
        <Link href="/loot" className="m-2" prefetch={false}>
          Loot
        </Link>
        <Link href="/performance" className="m-2" prefetch={false}>
          Performance
        </Link>
      </div>
    </div>
  );
}
