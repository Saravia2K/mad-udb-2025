export default function CountdownItem({ number, label }: CountdownItemProps) {
  return (
    <div className="flex flex-col font-[Nexa] text-white xl:text-center">
      <span className="text-7xl font-bold max-xl:border-b-2 xl:text-9xl">
        {number}
      </span>
      <span className="text-3xl font-extralight xl:text-4xl">{label}</span>
    </div>
  );
}

type CountdownItemProps = {
  number: string;
  label: string;
};
