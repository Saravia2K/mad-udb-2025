import { redirect } from "react-router";

import Button from "@/components/common/button";
import Areas from "@/components/features/profile/areas";
import Shape from "@/components/features/profile/shape";
import SocialNetworks from "@/components/features/profile/social-networks";

import type { Profile } from "@/lib/types";
import getPublicImageURL from "@/lib/utils/get-public-image-url";
import sharedMetatags from "@/lib/utils/shared-metatags";
import type { Route } from "./+types/profile";

import bg from "@/assets/images/bg-perfiles-homepage.svg";
import PROFILES from "@/assets/json/profiles.json";
import PageContainer from "@/components/features/profile/page-container";

export const meta = ({ loaderData }: Route.MetaArgs) => {
  return sharedMetatags([
    { title: `${loaderData.name} | MAD 2025` },
    { name: "description", content: loaderData.description },
    {
      property: "og:image",
      content: `https://madudb2025.com${getPublicImageURL(loaderData as Profile, "perfil")}`,
    },
    { name: "og:description", content: loaderData.description },
  ]);
};

export const loader = ({ params }: Route.LoaderArgs) => {
  const { "profile-slug": profileSlug } = params;

  const profile = PROFILES.find((p) => p.slug == profileSlug);
  if (profile == undefined) return redirect("/");

  return profile;
};

export default function ProfilePage({ loaderData }: Route.ComponentProps) {
  const { name, alias, areas, flipbook, web, description } = loaderData;

  return (
    <PageContainer>
      <div className="relative z-3 mx-[var(--general-x-padding)] mt-30 rounded-4xl bg-[linear-gradient(180deg,#601FFF_0%,rgba(167,153,248,0.00)_100%)] p-4 shadow-[0_4px_20px_0_rgba(255,255,255,0.10)_inset,_0_4px_50px_0_rgba(182,182,182,0.10)_inset] backdrop-blur-[25px] md:grid md:grid-cols-[35%_1fr] md:gap-16 lg:grid-cols-[40%_1fr] lg:p-11">
        <div className="relative h-fit">
          <img
            src={getPublicImageURL(loaderData as Profile, "perfil")}
            className="rounded-2xl shadow-[0_8px_16px_0_rgba(0,0,0,0.56)]"
          />
          <div className="absolute bottom-0 grid w-full grid-cols-2 gap-4 p-4">
            <Button target="_blank" href={flipbook}>
              Portafolio
            </Button>
            <Button target="_blank" variant="transparent" href={web}>
              Sitio Web
            </Button>
          </div>
        </div>
        <div className="py-6">
          <div className="flex items-center font-[Nexa] text-3xl max-lg:justify-between lg:gap-4 lg:text-[2.2rem]">
            <h1 className="font-bold">{name}</h1>
            {alias && alias != name && (
              <h2>
                <span className="font-bold">//</span>
                <span>{alias}</span>
              </h2>
            )}
          </div>
          <Areas areas={areas} />
          <SocialNetworks profile={loaderData as Profile} />
          <p className="pb-4 lg:text-2xl">{description}</p>
        </div>
        <Shape
          imageUrl={getPublicImageURL(loaderData as Profile, "trabajo2")}
        />
      </div>
      <img
        src={bg}
        alt="bg"
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
    </PageContainer>
  );
}
