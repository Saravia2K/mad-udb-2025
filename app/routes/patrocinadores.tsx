import ShapesContainer from "@/components/common/shapes-container";
import Description from "@/components/features/patrocinadores/description";
import sharedMetatags from "@/lib/utils/shared-metatags";

export const meta = () =>
  sharedMetatags([
    { title: "Patrocinadores | MAD 2025" },
    { name: "description", content: SEODescriptions },
    { property: "og:description", content: SEODescriptions },
    {
      property: "og:title",
      content: "Patrocinadores | MAD 2025 - Prisma, creatividad que transforma",
    },
  ]);

export default function PatrocinadoresPage() {
  return (
    <ShapesContainer>
      <Description />
    </ShapesContainer>
  );
}

const SEODescriptions =
  "PRISMA MAD 2025 es posible gracias al apoyo de instituciones y empresas que creen en el poder del diseño como motor de cambio. Su confianza y compromiso fortalecen este espacio de encuentro entre estudiantes y la industria creativa, impulsando nuevas oportunidades para el talento emergente. A todos nuestros patrocinadores, gracias por ser parte de esta experiencia que proyecta la creatividad hacia el futuro.";
