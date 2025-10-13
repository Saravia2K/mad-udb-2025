import { useMemo } from "react";

import type { Profile } from "@/lib/types";
import shuffleArray from "@/lib/utils/shuffle-array";

import PROFILES from "@/assets/json/profiles.json";

export default function useProfiles(random?: boolean): Profile[] {
  const profilesCpy = [...PROFILES];
  const result = random
    ? shuffleArray(profilesCpy)
    : (profilesCpy.sort((a, b) => a.name.localeCompare(b.name)) as Profile[]);

  return useMemo(() => result, []);
}
