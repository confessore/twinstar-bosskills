import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center bg-white">
        <Image
          src="/twinstar.png"
          alt=""
          width={256}
          height={128}
          className=''
        ></Image>
      </div>
      <div className="flex flex-wrap bg-black text-white">
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
