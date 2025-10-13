import { useState } from "react";
import { useSearchParams } from "react-router";

import SearchInput from "@/components/common/search-input";
import sharedMetatags from "@/lib/utils/shared-metatags";

import bg from "@/assets/images/bg-perfiles-homepage.svg";
import ProfileCard from "@/components/common/profile-card";
import useProfiles from "@/hooks/use-profiles";

export const meta = () => sharedMetatags([{ title: "Portafolios | MAD 2025" }]);

export default function PortafoliosPage() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const profiles = useProfiles({
    query,
    category: searchParams.get("category") ?? undefined,
  });

  return (
    <section className="">
      <div className="bg-[linear-gradient(138deg,#FF76FF_-7.42%,#601FFF_61.87%,#FBB03B_103.24%)] px-[var(--general-x-padding)] pt-20 pb-10">
        <p className="rounded-[1rem] border-[2px] border-solid border-white p-4 xl:text-2xl">
          Cada portafolio es un prisma distinto: Un reflejo de ideas, estilos y
          visiones que se transforman en diseño. Descubre el talento que da vida
          a MAD 2025.
        </p>
        <div className="py-4">
          <SearchInput onChange={(v) => setQuery(v)} />
        </div>
      </div>
      <div className="relative top-[-2.5rem] overflow-hidden rounded-[20px_20px_0_0] bg-[linear-gradient(199deg,#9E5CFC_5.17%,#6246F8_50%,#A394FD_94.83%)] p-4">
        <img
          src={bg}
          alt="bg"
          className="absolute top-0 left-0 h-auto w-full"
        />
        <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          {profiles.map((p) => (
            <ProfileCard key={p.name} profile={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
