import { useMemo } from "react";

import type { Profile } from "@/lib/types";
import shuffleArray from "@/lib/utils/shuffle-array";

import PROFILES from "@/assets/json/profiles.json";

export default function useProfiles(props?: UseProfilesOptions): Profile[] {
  return useMemo(() => {
    let profilesCpy = [...PROFILES] as Profile[];

    // Filter by query (name)
    if (props?.query) {
      const q = props.query.toLowerCase();
      profilesCpy = profilesCpy.filter((p) => p.name.toLowerCase().includes(q));
    }

    // Filter by category (areas contains the category)
    if (props?.category) {
      const cat = props.category.toLowerCase();
      profilesCpy = profilesCpy.filter((p) =>
        Array.isArray(p.areas)
          ? p.areas.some((a) => String(a).toLowerCase() === cat)
          : false,
      );
    }

    // Randomize or sort the resulting list
    if (props?.random) {
      return shuffleArray(profilesCpy);
    }

    return profilesCpy.sort((a, b) => a.name.localeCompare(b.name));
  }, [props?.query ?? "", props?.category ?? "", !!props?.random]);
}

type UseProfilesOptions = {
  random?: boolean;
  query?: string;
  category?: string;
};
