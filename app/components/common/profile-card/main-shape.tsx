import { useId, type SVGProps } from "react";

interface MainShapeProps extends SVGProps<SVGSVGElement> {
  imageUrl?: string;
}

const MainShape = ({ imageUrl, ...props }: MainShapeProps) => {
  const id = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 950 824"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <defs>
        {/* Pattern para la imagen de fondo */}
        <pattern
          id={`backgroundPattern-${id}`}
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          {imageUrl ? (
            <image
              href={imageUrl}
              width={1}
              height={1}
              preserveAspectRatio="xMidYMid slice"
            />
          ) : (
            <use
              xlinkHref="#fallbackImage"
              transform="matrix(.00175 0 0 .00203 -.18 0)"
            />
          )}
        </pattern>

        {/* Imagen de fallback (original) */}
        <image
          xlinkHref=""
          id="fallbackImage"
          width={776}
          height={492}
          preserveAspectRatio="none"
        />

        {/* Filtro de sombra */}
        <filter
          id="shadowFilter"
          width="120%"
          height="120%"
          x="-10%"
          y="-10%"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={9.111} />
          <feGaussianBlur stdDeviation={9.111} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2444_1083"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2444_1083"
            result="shape"
          />
        </filter>
      </defs>

      <g filter="url(#shadowFilter)">
        <path
          fill={
            imageUrl ? `url(#backgroundPattern-${id})` : "url(#fallbackPattern)"
          }
          d="M840.227 9.794c50.315 0 91.104 40.789 91.104 91.104v603.756c0 50.316-40.789 91.105-91.104 91.105H283.673c-16.415 0-25.677-21.351-17.565-35.621 12.931-22.745 20.317-49.059 20.317-77.099 0-86.234-69.849-156.14-156.011-156.14-27.613 0-53.55 7.18-76.049 19.777-14.24 7.972-35.314-1.277-35.314-17.597v-428.18c0-50.315 40.789-91.105 91.104-91.105h730.072Z"
          shapeRendering="crispEdges"
        />
      </g>
    </svg>
  );
};

export default MainShape;
