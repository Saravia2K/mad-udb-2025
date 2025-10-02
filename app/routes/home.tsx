import type { Route } from "./+types/home";

import Countdown from "@/components/features/home/countdown";
import DateChip from "@/components/features/home/date-chip";
import AdditionalInformation from "@/components/features/home/additional-information";

import fondoContadorDesktop from "@/assets/images/fondo_contador_desktop.webp";
import logo from "@/assets/images/logo_mad_transparente_dos.webp";
import prismaDsgn from "@/assets/images/prisma-dsgn.svg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MAD UDB 2025" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main
      className="absolute h-screen w-screen bg-cover"
      style={{ backgroundImage: `url(${fondoContadorDesktop})` }}
    >
      <img src={logo} alt="MAD Logo" className="m-auto mt-25 w-200" />
      <img
        src={prismaDsgn}
        alt="PRISMA/DSGN"
        className="m-auto mt-[-3.5%] h-auto w-75"
      />
      <Countdown />
      <DateChip />
      <AdditionalInformation />
    </main>
  );
}
