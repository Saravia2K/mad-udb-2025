import type { Route } from "./+types/home";

import Main from "@/components/features/home/main";
import Countdown from "@/components/features/home/countdown";
import DateChip from "@/components/features/home/date-chip";
import AdditionalInformation from "@/components/features/home/additional-information";

import logoMAD from "@/assets/images/logo_mad.svg";
import ogImage from "@/assets/images/og_mad2025_prisma.png";

export function meta({ loaderData }: Route.MetaArgs) {
  const host = loaderData.host;
  return [
    { title: "MAD 2025 - Prisma, creatividad que transforma" },
    {
      description:
        "Un prisma convierte la luz en un universo de colores. MAD 2025, una identidad que se multiplica en ideas, talentos y formas, todas conectadas en la Universidad Don Bosco.",
    },
    {
      name: "og:title",
      content: "MAD 2025 - Prisma, creatividad que transforma",
    },
    {
      name: "og:description",
      content:
        "Un prisma convierte la luz en un universo de colores. MAD 2025, una identidad que se multiplica en ideas, talentos y formas, todas conectadas en la Universidad Don Bosco.",
    },
    {
      name: "og:image",
      content: `${host}${ogImage}`,
    },
    {
      name: "og:type",
      content: "website",
    },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  return {
    host: `${url.protocol}//${url.host}`,
  };
}

export default function Home() {
  return (
    <Main>
      <div className="relative flex size-full flex-col items-center justify-center max-lg:px-48 max-md:px-[20vw]">
        <img src={logoMAD} alt="MAD - PRISMA/DSGN" className="lg:w-[20rem]" />
        <Countdown />
        <DateChip />
        <AdditionalInformation />
      </div>
    </Main>
  );
}
