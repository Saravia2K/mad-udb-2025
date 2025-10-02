import type { Route } from "./+types/home";

import Countdown from "@/components/features/home/countdown";
import DateChip from "@/components/features/home/date-chip";
import AdditionalInformation from "@/components/features/home/additional-information";

import fondoContadorDesktop from "@/assets/images/fondo_contador_desktop.webp";
import logo from "@/assets/images/logo_mad_transparente_dos.webp";
import prismaDsgn from "@/assets/images/prisma-dsgn.svg";
import Decorations from "@/components/features/home/decorations";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MAD UDB 2025" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main
      className="relative top-0 left-0 h-screen w-screen overflow-hidden bg-cover"
      style={{ backgroundImage: `url(${fondoContadorDesktop})` }}
    >
      <Decorations>
        <img src={logo} alt="MAD Logo" className="m-auto w-200 pt-25" />
        <img
          src={prismaDsgn}
          alt="PRISMA/DSGN"
          className="m-auto mt-[-3.5%] h-auto w-75"
        />
        <Countdown />
        <DateChip />
        <AdditionalInformation />
      </Decorations>
    </main>
  );
}
