import type { Route } from "./+types/home";

import AdditionalInformation from "@/components/features/home/additional-information";
import Countdown from "@/components/features/home/countdown";
import DateChip from "@/components/features/home/date-chip";
import Main from "@/components/features/home/main";

import logoTabletMovil from "@/assets/images/logo_contador_tablet_movil.webp";
import logoDesktop from "@/assets/images/logo_mad_transparente_dos.webp";
import prismaDsgn from "@/assets/images/prisma-dsgn.svg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MAD UDB 2025" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Main>
      <Logo src={logoDesktop} />
      <Logo responsive src={logoTabletMovil} />
      <img
        src={prismaDsgn}
        alt="PRISMA/DSGN"
        className="m-auto mt-2 h-auto w-50 xl:mt-[-3.5%] xl:w-75"
      />
      <Countdown />
      <DateChip />
      <AdditionalInformation />
      {/* <Decorations>
        
      </Decorations> */}
    </Main>
  );
}

type LogoProps = { src: string; responsive?: boolean };
const Logo = ({ src, responsive }: LogoProps) => (
  <img
    src={src}
    alt="MAD logo"
    className={`m-auto w-200 pt-15 xl:pt-25 ${responsive ? "xl:hidden" : "max-xl:hidden"}`}
  />
);
