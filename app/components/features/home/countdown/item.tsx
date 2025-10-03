export default function CountdownItem({ number, label }: CountdownItemProps) {
  return (
    <div className="mb-5 flex text-white max-lg:border-b-2 max-md:pb-1 lg:flex-col lg:items-end">
      <span className="text-5xl font-bold max-lg:w-[20%] max-md:w-[23%] md:text-6xl lg:text-9xl">
        {number}
      </span>
      <span className="text-xl font-extralight max-md:ml-2 md:text-2xl lg:w-full lg:text-center lg:text-3xl">
        {label}
      </span>
    </div>
  );
}

type CountdownItemProps = {
  number: string;
  label: string;
};
