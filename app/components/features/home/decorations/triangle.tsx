import type { SVGProps } from "react";

export const DesktopTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={500}
    height={175}
    fill="none"
    {...props}
  >
    <foreignObject width={528.606} height={565.262}>
      <div
        style={{
          backdropFilter: "blur(10px)",
          clipPath: "url(#a)",
          height: "100%",
          width: "100%",
        }}
      />
    </foreignObject>
    <g data-figma-bg-blur-radius={20} filter="url(#b)">
      <path
        fill="url(#c)"
        fillOpacity={0.1}
        d="M474.534 7c10.189-4.529 21.325 4.089 19.497 15.088L411.399 519.31c-1.736 10.45-14.001 15.261-22.378 8.778l-377.963-292.5c-8.378-6.484-6.799-19.563 2.882-23.866L474.534 7Z"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <linearGradient
        id="c"
        x1={498.294}
        x2={100.621}
        y1={-3.561}
        y2={510.305}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FA03FE" />
        <stop offset={1} stopColor="#601FFF" />
        <stop offset={1} stopColor="#601FFF" />
      </linearGradient>
      <clipPath id="a" transform="translate(14.376 14.232)">
        <path d="M474.534 7c10.189-4.529 21.325 4.089 19.497 15.088L411.399 519.31c-1.736 10.45-14.001 15.261-22.378 8.778l-377.963-292.5c-8.378-6.484-6.799-19.563 2.882-23.866L474.534 7Z" />
      </clipPath>
      <filter
        id="b"
        width={528.606}
        height={565.262}
        x={-14.376}
        y={-14.232}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={2.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1230_793"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1230_793"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={25} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.713726 0 0 0 0 0.713726 0 0 0 0 0.713726 0 0 0 0.1 0" />
        <feBlend in2="shape" result="effect2_innerShadow_1230_793" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
        <feBlend
          in2="effect2_innerShadow_1230_793"
          result="effect3_innerShadow_1230_793"
        />
      </filter>
    </defs>
  </svg>
);
