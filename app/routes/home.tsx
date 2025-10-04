import type { Route } from "./+types/home";

import Main from "@/components/features/home/main";
import Countdown from "@/components/features/home/countdown";
import DateChip from "@/components/features/home/date-chip";
import AdditionalInformation from "@/components/features/home/additional-information";
import Decorations from "@/components/features/home/decorations";

import logoMAD from "@/assets/images/logo_mad.svg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MAD UDB 2025" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Main>
      <div className="relative flex size-full flex-col justify-center max-lg:px-48 max-md:px-[20vw] lg:items-center">
        <img src={logoMAD} alt="MAD - PRISMA/DSGN" className="lg:w-[20rem]" />
        <Countdown />
        <DateChip />
      </div>
    </Main>
  );
}

type LogoProps = { src: string; responsive?: boolean };
const Logo = ({ src, responsive }: LogoProps) => (
  <img
    src={src}
    alt="MAD logo"
    className={`m-auto w-175 pt-7 md:pt-15 lg:pt-5 2xl:w-250 ${responsive ? "lg:hidden" : "max-lg:hidden"}`}
  />
);
