import sharedMetatags from "@/lib/utils/shared-metatags";
import Hero from "@/components/features/sobre-el-evento/hero";
import FAQ from "@/components/features/sobre-el-evento/faq";

export const meta = () =>
  sharedMetatags([
    { title: "Sobre el evento | MAD 2025" },
    { name: "description", content: SEODescriptions },
    {
      property: "og:title",
      content:
        "Sobre el evento | MAD 2025 - Prisma, creatividad que transforma",
    },
    { property: "og:description", content: SEODescriptions },
  ]);

export default function SobreElEventoPage() {
  return (
    <div className="bg-[linear-gradient(252deg,#FF7936_1.85%,#E342A1_39.29%,#601FFF_62.8%,#984BFA_77.68%,#A799F8_101.68%)]">
      <Hero />
      <FAQ />
    </div>
  );
}

const SEODescriptions =
  "MAD 2025 se inspira en el prisma como símbolo de transformación y diversidad. Así como la luz se descompone en múltiples colores, los estudiantes de Diseño Gráfico de la UDB proyectan su talento en distintas áreas creativas, convergiendo en un universo visual que refleja innovación, identidad y nuevas perspectivas para la industria.";
