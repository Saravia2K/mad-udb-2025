import type { Profile } from "../types";
import { VITE_FILE_STORAGE_PATH } from "@/env";

import profileFallback from "@/assets/images/fallbacks/fallback_perfil.webp";
import mockup1Fallback from "@/assets/images/fallbacks/fallback_trabajo1.webp";
import mockup2Fallback from "@/assets/images/fallbacks/fallback_trabajo2.webp";
import FALLBACKS from "@/assets/json/fallbacks.json";

export default function getPublicImageURL(
  profile: Profile,
  image: "perfil" | "trabajo1" | "trabajo2",
) {
  const { slug } = profile;
  const imageName = slug.replaceAll("-", "_");

  if (image == "perfil") {
    const { areas } = profile;

    const imagePath = `profiles/${areas[0]}/${imageName}_perfil.webp`;
    const isFallback = FALLBACKS.profile.some((p) => p == slug);
    return isFallback
      ? FALLBACKS_PATH.profile
      : `${VITE_FILE_STORAGE_PATH}/${imagePath}`;
  }

  const folders = {
    trabajo1: "mockup1",
    trabajo2: "mockup2",
  };
  const isFallback = FALLBACKS.mockups.some((m) => m == slug);
  const mockupPath = `mockups/${folders[image]}/${imageName}_${image}.webp`;
  console.log(`${VITE_FILE_STORAGE_PATH}/${mockupPath}`);
  return isFallback
    ? FALLBACKS_PATH[image]
    : `${VITE_FILE_STORAGE_PATH}/${mockupPath}`;
}

const FALLBACKS_PATH = {
  profile: profileFallback,
  trabajo1: mockup1Fallback,
  trabajo2: mockup2Fallback,
};
