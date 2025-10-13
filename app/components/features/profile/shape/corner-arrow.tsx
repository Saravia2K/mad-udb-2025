import { type SVGProps } from "react";

interface CornerArrowProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const CornerArrow = ({ size = 90, ...props }: CornerArrowProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 90 90"
    fill="none"
    {...props}
  >
    {/* Círculo blanco de fondo */}
    <circle
      cx="45"
      cy="45"
      r="42"
      fill="white"
      stroke="#f0f0f0"
      strokeWidth="1"
    />

    {/* Flecha centrada - ajustada para el círculo */}
    <g transform="translate(13.5 13.5) scale(0.7)">
      <g clipPath="url(#clip0_2081_2211)">
        <path
          d="M68.3319 25.5837C68.3324 23.4174 66.5738 21.6588 64.4075 21.6592L36.6791 21.6653C34.5128 21.6658 32.7534 23.4252 32.7529 25.5915C32.7525 27.7578 34.5111 29.5164 36.6774 29.5159L54.9434 29.5119L22.8148 61.6406C21.2808 63.1746 21.2802 65.6528 22.8136 67.1862C24.347 68.7196 26.8252 68.7191 28.3593 67.185L60.4879 35.0564L60.4839 53.3224C60.4834 55.4887 62.242 57.2473 64.4083 57.2469C66.5746 57.2464 68.334 55.487 68.3345 53.3207L68.3406 25.5923L68.3319 25.5837Z"
          fill="url(#paint0_linear_2081_2211)"
        />
      </g>
    </g>

    <defs>
      <linearGradient
        id="paint0_linear_2081_2211"
        x1="82.1285"
        y1="41.1511"
        x2="11.5562"
        y2="32.8989"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E5E5E5" />
        <stop offset="0.349171" stopColor="#984BFA" />
        <stop offset="0.649038" stopColor="#601FFF" />
      </linearGradient>
      <clipPath id="clip0_2081_2211">
        <rect
          width="62.7528"
          height="62.7528"
          fill="white"
          transform="translate(89.3729 45) rotate(135)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default CornerArrow;
