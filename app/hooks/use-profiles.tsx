import { useMemo } from "react";

import type { Profile } from "@/lib/types";
import shuffleArray from "@/lib/utils/shuffle-array";

import PROFILES from "@/assets/json/profiles.json";

export default function useProfiles(props?: UseProfilesOptions): Profile[] {
  return useMemo(() => {
    const profilesCpy = [...PROFILES] as Profile[];

    if (props?.query) {
      const q = props.query.toLowerCase();
      return profilesCpy.filter((p) => p.name.toLowerCase().includes(q));
    }

    if (props?.random) {
      return shuffleArray(profilesCpy);
    }

    return profilesCpy.sort((a, b) => a.name.localeCompare(b.name));
  }, [props?.query ?? "", !!props?.random]);
}

type UseProfilesOptions = {
  random?: boolean;
  query?: string;
};
