import type { Profile } from "../types";

import FALLBACKS from "@/assets/json/fallbacks.json";

export default function getPublicImageURL(
  profile: Profile,
  image: "perfil" | "trabajo1" | "trabajo2",
) {
  const { slug } = profile;
  const imageName = slug.replaceAll("-", "_");

  if (image == "perfil") {
    const { areas } = profile;

    const imagePath = `/images/perfiles/${areas[0]}/${imageName}_perfil.webp`;
    const isFallback = FALLBACKS.profile.some((p) => p == slug);
    return isFallback ? FALLBACKS_PATH.profile : imagePath;
  }

  const folders = {
    trabajo1: "mockup1",
    trabajo2: "mockup2",
  };
  const isFallback = FALLBACKS.mockups.some((m) => m == slug);
  const mockupPath = `/images/mockups/${folders[image]}/${imageName}_${image}.webp`;
  return isFallback ? FALLBACKS_PATH[image] : mockupPath;
}

const FALLBACKS_PATH = {
  profile: "/images/perfiles/fallback_perfil.webp",
  trabajo1: "/images/mockups/fallback_trabajo1.webp",
  trabajo2: "/images/mockups/fallback_trabajo2.webp",
};
