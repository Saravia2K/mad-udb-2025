import { useId, type SVGProps } from "react";
import { type Color } from "./category-item-body";

type CategoryItemCircleProps = SVGProps<SVGSVGElement> & {
  colors: [Color, Color, Color];
};

export default function CategoryItemCircle({
  colors,
  ...props
}: CategoryItemCircleProps) {
  const id = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 100 100" // ViewBox más grande para dar espacio a la sombra
      fill="none"
      className="absolute top-0 right-0 aspect-square"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      {/* Círculo centrado en el nuevo viewBox */}
      <g filter={`url(#filter0_d_2408_1023-${id})`}>
        <circle
          cx="50"
          cy="50"
          r="41.5196"
          fill={`url(#paint0_linear_2408_1023-${id})`}
        />
      </g>

      {/* Flecha centrada */}
      <g transform="translate(35 38) scale(0.9)">
        <path
          d="M28.9644 2.89531C28.9647 1.59232 27.9069 0.53452 26.6039 0.534806L9.92564 0.538469C8.62265 0.538755 7.56439 1.59702 7.5641 2.90001C7.56381 4.203 8.62161 5.2608 9.9246 5.26051L20.9114 5.25809L1.58643 24.5831C0.66371 25.5058 0.663382 26.9964 1.5857 27.9187C2.50801 28.8411 3.99863 28.8407 4.92135 27.918L24.2463 8.59302L24.2439 19.5798C24.2436 20.8828 25.3014 21.9406 26.6044 21.9403C27.9074 21.94 28.9657 20.8818 28.966 19.5788L28.9696 2.90052L28.9644 2.89531Z"
          fill="white"
        />
      </g>

      <defs>
        {/* Ajustar el gradiente para el nuevo centro */}
        <linearGradient
          id={`paint0_linear_2408_1023-${id}`}
          x1="8.2601" // Ajustado: -22.74 + 41.74 = 19 (aproximado)
          y1="20.2116" // Ajustado: 12.21 + 8 = 20.21
          x2="94.3522" // Ajustado: 63.35 + 31 = 94.35
          y2="91.0392" // Ajustado: 83.04 + 8 = 91.04
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors[0]} />
          <stop offset="0.485577" stopColor={colors[1]} />
          <stop offset="1" stopColor={colors[2]} />
        </linearGradient>

        {/* Ajustar el filtro para el nuevo viewBox */}
        <filter
          id={`filter0_d_2408_1023-${id}`}
          x="6" // Más margen
          y="6" // Más margen
          width="92"
          height="92"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3.78832" />
          <feGaussianBlur stdDeviation="1.89416" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2408_1023"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2408_1023"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
