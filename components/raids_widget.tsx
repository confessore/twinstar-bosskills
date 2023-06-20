import { parse_boss } from "@/styles/colors";
import Link from "next/link";

type Props = {};

const raids = [
  // Mogu'shan Vaults
  [59915, 60009, 60143, 60410, 60701, 60399],
];

export default function RaidsWidget(props: Props) {
  return (
    <div className="m-0.5 flex w-96 max-w-full flex-col justify-center">
      <p className="m-0.5 text-xl font-bold">Raids</p>
      <div>
        <p>Mogu&apos;shan Vaults</p>
        {raids[0]?.map((value: number, index: number) => {
          return (
            <Link
              href={`boss_kills/${value.toString()}`}
              className="m-0.5 flex flex-col"
              prefetch={false}
              key={index}
            >
              {parse_boss(value)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
