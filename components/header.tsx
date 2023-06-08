import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col m-1 p-1">
      <div className="flex m-1 p-1">Twinstar Boss Kills</div>
      <div className="flex m-1 p-1">
        <Link href="/" className="m-1 p-1" prefetch={false}>
          Home
        </Link>
        <Link href="/latest" className="m-1 p-1" prefetch={false}>
          Latest
        </Link>
        <Link href="" className="m-1 p-1" prefetch={false}>
          Raids
        </Link>
        <Link href="" className="m-1 p-1" prefetch={false}>
          Characters
        </Link>
        <Link href="" className="m-1 p-1" prefetch={false}>
          Guilds
        </Link>
        <Link href="" className="m-1 p-1" prefetch={false}>
          Loot
        </Link>
        <Link href="" className="m-1 p-1" prefetch={false}>
          Player Performance
        </Link>
      </div>
    </div>
  );
}
