import RaidCard from "./raid_card";

type Props = {};

const raids = [
  // Mogu'shan Vaults
  [59915, 60009, 60143, 60410, 60701, 60399],
  // Heart of Fear
  [62980, 62543, 62164, 62397, 62511, 62837]
];

export default function RaidsWidget(props: Props) {
  return (
    <div className="m-0.5 flex w-96 max-w-full flex-col justify-center">
      <p className="m-0.5 text-xl font-bold">Raids</p>
      <div className="flex flex-col">
        <p>Mogu&apos;shan Vaults</p>
        {raids[0]?.map((value: number, index: number) => {
          return <RaidCard key={index} value={value} mode={3} />;
        })}
        {raids[0]?.map((value: number, index: number) => {
          return <RaidCard key={index} value={value} mode={4} />;
        })}
      </div>
      <div className="flex flex-col">
        <p>Heart of Fear</p>
        {raids[1]?.map((value: number, index: number) => {
          return <RaidCard key={index} value={value} mode={3} />;
        })}
        {raids[1]?.map((value: number, index: number) => {
          return <RaidCard key={index} value={value} mode={4} />;
        })}
      </div>
    </div>
  );
}
