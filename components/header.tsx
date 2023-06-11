import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="m-1 flex flex-col p-1">
      <div className="m-1 flex p-1">TwinStar WoW Boss Kills</div>
      <div className="m-1 flex flex-wrap p-1">
        <Link href="/" className="m-1 p-1" prefetch={false}>
          Home
        </Link>
        <Link href="/latest" className="m-1 p-1" prefetch={false}>
          Latest
        </Link>
        <Link href="/raids" className="m-1 p-1" prefetch={false}>
          Raids
        </Link>
        <Link href="/characters" className="m-1 p-1" prefetch={false}>
          Characters
        </Link>
        <Link href="/guilds" className="m-1 p-1" prefetch={false}>
          Guilds
        </Link>
        <Link href="/loot" className="m-1 p-1" prefetch={false}>
          Loot
        </Link>
        <Link href="/performance" className="m-1 p-1" prefetch={false}>
          Player Performance
        </Link>
      </div>
    </div>
  );
}
