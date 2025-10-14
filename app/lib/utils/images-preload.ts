import PROFILES from "@/assets/json/profiles.json";

export default function ImagesPreload() {
  let links = [];

  for (const p of PROFILES) {
    const imageName = p.slug.replaceAll("-", "_");

    links.push({
      rel: "preload",
      href: `/images/mockups/mockup1/${imageName}_trabajo1.webp`,
      as: "image",
    });
    links.push({
      rel: "preload",
      href: `/images/mockups/mockup2/${imageName}_trabajo2.webp`,
      as: "image",
    });
  }

  return links;
}
