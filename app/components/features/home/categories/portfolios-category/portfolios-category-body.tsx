import { useId, type SVGProps } from "react";

import bg from "../images/portfolios.svg";

export type PortfoliosCategoryBodyProps = SVGProps<SVGSVGElement> & {
  imageX?: number | string;
  imageY?: number | string;
  imageHeight?: number | string;
  preserveAspectRatio?: string;
};

const PortfolioCategory = ({
  imageX = "0%",
  imageY = "-40%",
  imageHeight = "200%",
  preserveAspectRatio = "xMidYMid slice",
  ...props
}: PortfoliosCategoryBodyProps) => {
  const aId = useId();
  const bId = useId();

  return (
    <>
      {/* SVG rectangular para desktop */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 547 256"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        className="hidden md:block"
        {...props}
      >
        <defs>
          <clipPath id={`desktopClip-${aId}`}>
            <path d="M466.225 0C468.962 0 470.516 3.27023 469.035 5.57203C463.8 13.7097 460.761 23.3953 460.761 33.792C460.761 62.6345 484.134 86.0156 512.966 86.0156C523.456 86.0156 533.222 82.9197 541.404 77.5922C543.706 76.0932 547 77.6463 547 80.3935V204.612C547 232.993 523.993 256 495.612 256H51.3877C23.0073 256 0 232.993 0 204.612V51.3877C0 23.0073 23.0073 0 51.3877 0H466.225Z" />
          </clipPath>

          <linearGradient
            id={`desktopGradient-${bId}`}
            x1="385.459"
            y1="-0.000777728"
            x2="53.588"
            y2="336.111"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF7936" />
            <stop offset="0.375" stopColor="#E342A1" />
            <stop offset="0.610577" stopColor="#601FFF" />
            <stop offset="0.759615" stopColor="#984BFA" />
            <stop offset="1" stopColor="#A799F8" />
          </linearGradient>
        </defs>

        <g clipPath={`url(#desktopClip-${aId})`}>
          {/* Fondo con gradiente */}
          <path
            d="M466.225 0C468.962 0 470.516 3.27023 469.035 5.57203C463.8 13.7097 460.761 23.3953 460.761 33.792C460.761 62.6345 484.134 86.0156 512.966 86.0156C523.456 86.0156 533.222 82.9197 541.404 77.5922C543.706 76.0932 547 77.6463 547 80.3935V204.612C547 232.993 523.993 256 495.612 256H51.3877C23.0073 256 0 232.993 0 204.612V51.3877C0 23.0073 23.0073 0 51.3877 0H466.225Z"
            fill={`url(#desktopGradient-${bId})`}
          />

          {/* Imagen */}
          <image
            href={bg}
            x={imageX}
            y={imageY}
            height={imageHeight}
            preserveAspectRatio={preserveAspectRatio}
            width="100%"
          />
        </g>
      </svg>

      {/* SVG cuadrado para móvil */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        fill="none"
        viewBox="0 0 264 263"
        preserveAspectRatio="xMidYMid meet"
        className="block aspect-square md:hidden"
        {...props}
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
            <stop stopColor="#FF7936" />
            <stop offset="0.375" stopColor="#E342A1" />
            <stop offset="0.610577" stopColor="#601FFF" />
            <stop offset="0.759615" stopColor="#984BFA" />
            <stop offset="1" stopColor="#A799F8" />
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

          <image
            href={bg}
            x={imageX}
            y={imageY}
            height={imageHeight}
            preserveAspectRatio={preserveAspectRatio}
          />
        </g>
      </svg>
    </>
  );
};

export default PortfolioCategory;
