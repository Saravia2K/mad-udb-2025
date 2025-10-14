import { useMemo, useRef } from "react";

import type { Profile } from "@/lib/types";
import shuffleArray from "@/lib/utils/shuffle-array";

import PROFILES from "@/assets/json/profiles.json";

export default function useProfiles(props?: UseProfilesOptions): Profile[] {
  // Ref to keep stored random lists per category (so they persist across renders)
  const storedRandomByCategory = useRef<Record<string, Profile[]>>({});

  return useMemo(() => {
    let profilesCpy = [...PROFILES] as Profile[];

    // Filter by category first (random list should be stored per category)
    if (props?.category) {
      const cat = props.category.toLowerCase();
      profilesCpy = profilesCpy.filter((p) => p.areas[0] == cat);
    }

    const categoryKey = props?.category?.toLowerCase() ?? "__all__";

    // If there's an active query, filter by it (this should not overwrite stored random)
    if (props?.query) {
      const q = props.query.toLowerCase();
      const filtered = profilesCpy.filter(
        (p) => p.name.toLowerCase().includes(q) || p.slug.includes(q),
      );

      // Randomize query results if requested, otherwise sort
      if (props?.random) return shuffleArray(filtered);
      return filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // No query (empty string)
    if (props?.random) {
      // If we already stored a random list for this category, return it
      if (storedRandomByCategory.current[categoryKey]) {
        return storedRandomByCategory.current[categoryKey];
      }

      // Otherwise, create, store and return a shuffled list for this category
      const shuffled = shuffleArray(profilesCpy);
      storedRandomByCategory.current[categoryKey] = shuffled;
      return shuffled;
    }

    // Default: sorted list when not random and no query
    return profilesCpy.sort((a, b) => a.name.localeCompare(b.name));
  }, [props?.query ?? "", props?.category ?? "", !!props?.random]);
}

type UseProfilesOptions = {
  random?: boolean;
  query?: string;
  category?: string;
};
