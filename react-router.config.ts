import type { Config } from "@react-router/dev/config";
import PROFILES from "./app/assets/json/profiles.json";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  prerender: ["/proximamente", ...PROFILES.map((p) => `/${p.slug}`)],
} satisfies Config;
