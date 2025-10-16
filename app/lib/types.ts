import CATEGORIES from "@/assets/json/categories.json";

export type Profile = {
  name: string;
  email?: string;
  behance?: string;
  linkedin?: string;
  web: string;
  flipbook?: string;
  areas: (keyof typeof CATEGORIES)[];
  slug: string;
  instagram?: string;
};
