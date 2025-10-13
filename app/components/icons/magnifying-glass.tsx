import { type SVGProps } from "react";

const MagnifyingGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#C0C0CA"
      d="M26 12.998c0 2.868-.931 5.518-2.5 7.668l7.913 7.92a2.003 2.003 0 0 1-2.832 2.83l-7.912-7.918c-2.15 1.568-4.8 2.5-7.669 2.5-7.181 0-13-5.82-13-13 0-7.182 5.819-13 13-13s13 5.818 13 13Zm-13 9c4.969 0 9-4.032 9-9 0-4.97-4.031-9-9-9s-9 4.03-9 9c0 4.968 4.031 9 9 9Z"
    />
  </svg>
);
export default MagnifyingGlass;
