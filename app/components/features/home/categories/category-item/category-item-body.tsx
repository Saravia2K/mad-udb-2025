import { useId, useState, type SVGProps } from "react";

export type Color = `#${string}`;
export interface CategoryItemBodyProps extends SVGProps<SVGSVGElement> {
  colors: [Color, Color, Color];
  imageUrl: string;
  imageX?: number | string;
  imageY?: number | string;
  imageHeight?: number | string;
  preserveAspectRatio?: string;
}

export default function CategoryItemBody(props: CategoryItemBodyProps) {
  const {
    colors,
    imageUrl,
    imageX = "0%",
    imageY = "0%",
    imageHeight = "100%",
    preserveAspectRatio = "xMidYMid slice",
    onMouseEnter,
    onMouseLeave,
    style,
    ...svgProps
  } = props;
  const [isHover, setIsHover] = useState(false);
  const aId = useId();
  const bId = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      fill="none"
      viewBox="0 0 264 263"
      preserveAspectRatio="xMidYMid meet"
      {...svgProps}
    >
      <defs>
        {/* Definir el clipPath con la misma forma del SVG */}
        <clipPath id={`shapeClip-${aId}`}>
          <path d="M179.196 0c2.737 0 4.291 3.27 2.81 5.573-5.237 8.137-8.277 17.823-8.277 28.219 0 28.842 23.382 52.224 52.224 52.224 10.495 0 20.267-3.097 28.452-8.425 2.302-1.5 5.595.054 5.595 2.8v124.221C260 232.993 236.993 256 208.612 256H55.388C27.008 256 4 232.993 4 204.612V51.388C4 23.008 27.007 0 55.388 0h123.808Z" />
        </clipPath>

        <linearGradient
          id={bId}
          x1={-19.552}
          x2={268.704}
          y1={-9.216}
          y2={269.824}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors[0]} />
          <stop offset={0.404} stopColor={colors[1]} />
          <stop offset={0.869} stopColor={colors[2]} />
        </linearGradient>

        <filter
          id={aId}
          width={262.423}
          height={262.423}
          x={0.788}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={3.212} />
          <feGaussianBlur stdDeviation={1.606} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2395_276"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2395_276"
            result="shape"
          />
        </filter>
      </defs>

      <g filter={`url(#${aId})`} clipPath={`url(#shapeClip-${aId})`}>
        {/* Fondo con gradiente */}
        <path
          fill={`url(#${bId})`}
          d="M179.196 0c2.737 0 4.291 3.27 2.81 5.573-5.237 8.137-8.277 17.823-8.277 28.219 0 28.842 23.382 52.224 52.224 52.224 10.495 0 20.267-3.097 28.452-8.425 2.302-1.5 5.595.054 5.595 2.8v124.221C260 232.993 236.993 256 208.612 256H55.388C27.008 256 4 232.993 4 204.612V51.388C4 23.008 27.007 0 55.388 0h123.808Z"
        />

        {/* Imagen que siempre ocupa todo el espacio disponible */}
        {imageUrl && (
          <image
            href={imageUrl}
            x={imageX}
            y={imageY}
            height={imageHeight}
            preserveAspectRatio={preserveAspectRatio}
          />
        )}
      </g>
    </svg>
  );
}
