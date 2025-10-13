import useProfiles from "./use-profiles";

export default function useProfile(slug: string) {
  const profiles = useProfiles();

  return profiles.find((p) => p.slug == slug);
}
