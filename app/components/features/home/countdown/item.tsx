export default function CountdownItem({ number, label }: CountdownItemProps) {
  return (
    <div className="flex flex-col text-center font-[Nexa] text-white">
      <span className="text-9xl font-bold">{number}</span>
      <span className="text-4xl font-extralight">{label}</span>
    </div>
  );
}

type CountdownItemProps = {
  number: string;
  label: string;
};
