import type { MetaFunction } from "react-router";
import ogImage from "@/assets/images/og_mad2025_prisma.png";

type Metatags = Exclude<ReturnType<MetaFunction>, null | undefined>;
export default function sharedMetatags(props?: Metatags): Metatags {
  const metaTitle = props?.find((p) => "title" in p);
  return [
    {
      title:
        (metaTitle && "title" in metaTitle ? metaTitle.title : undefined) ||
        "MAD 2025",
    },
    ...buildMetaNameContent(
      [
        {
          name: "description",
          content:
            "Un prisma convierte la luz en un universo de colores. MAD 2025, una identidad que se multiplica en ideas, talentos y formas, todas conectadas en la Universidad Don Bosco.",
        },
        {
          property: "og:title",
          content: "MAD 2025 - Prisma, creatividad que transforma",
        },
        {
          property: "og:description",
          content:
            "Un prisma convierte la luz en un universo de colores. MAD 2025, una identidad que se multiplica en ideas, talentos y formas, todas conectadas en la Universidad Don Bosco.",
        },
        {
          property: "og:image",
          content: `https://www.madudb2025.com${ogImage}`,
        },
        {
          property: "og:type",
          content: "website",
        },
      ],
      props || [],
    ),
  ];
}

const buildMetaNameContent = (defaults: Metatags, news: Metatags) => {
  const metatags = [...defaults] as Array<{
    name?: string;
    property?: string;
    content: string;
  }>;

  if (news.length) {
    const defaultsIndexed = new Map(
      defaults?.map((d: any, i) => [`${d["name"] || d["property"]}`, i]),
    );
    for (const n of news) {
      const newMeta = n as (typeof metatags)[number];
      const key = newMeta["name"] || newMeta["property"];
      if (key && defaultsIndexed.has(key)) {
        const i = defaultsIndexed.get(key) as number;
        metatags[i]["content"] = newMeta.content;
      }
    }
  }

  return metatags;
};
