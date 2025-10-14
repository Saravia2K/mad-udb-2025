import { type SVGProps } from "react";

const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={24}
    fill="none"
    preserveAspectRatio="xMaxYMax meet"
    {...props}
  >
    <path
      fill="#fff"
      d="M39.085 1.166a3.126 3.126 0 0 1 0 4.42l-16.86 16.86-.018.019a3.124 3.124 0 0 1-4.42 0l-.018-.02L.909 5.585a3.126 3.126 0 0 1 4.42-4.419l14.668 14.668L34.665 1.166a3.126 3.126 0 0 1 4.42 0Z"
    />
  </svg>
);
export default Arrow;
