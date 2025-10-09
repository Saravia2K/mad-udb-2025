import { type SVGProps } from "react";

const HamburgerMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M.25 3.333C.25 1.49 1.75 0 3.607 0h40.286c1.857 0 3.357 1.49 3.357 3.333 0 1.844-1.5 3.334-3.357 3.334H3.607C1.75 6.667.25 5.177.25 3.333ZM.25 20c0-1.844 1.5-3.333 3.357-3.333h40.286c1.857 0 3.357 1.49 3.357 3.333 0 1.844-1.5 3.333-3.357 3.333H3.607C1.75 23.333.25 21.843.25 20Zm47 16.667c0 1.843-1.5 3.333-3.357 3.333H3.607C1.75 40 .25 38.51.25 36.667c0-1.844 1.5-3.334 3.357-3.334h40.286c1.857 0 3.357 1.49 3.357 3.334Z"
    />
  </svg>
);
export default HamburgerMenuIcon;
