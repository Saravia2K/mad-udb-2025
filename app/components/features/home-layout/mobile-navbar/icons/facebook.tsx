import { type SVGProps } from "react";

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={41}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M40.5 20.575C40.5 9.486 31.547.5 20.5.5S.5 9.486.5 20.575c0 9.41 6.46 17.314 15.172 19.486V26.707h-4.125v-6.133h4.125v-2.642c0-6.83 3.078-9.998 9.765-9.998 1.266 0 3.454.25 4.352.502v5.552c-.469-.047-1.289-.079-2.312-.079-3.282 0-4.547 1.247-4.547 4.486v2.18h6.53l-1.124 6.132h-5.414V40.5C32.828 39.3 40.5 30.84 40.5 20.575Z"
    />
  </svg>
);
export default FacebookIcon;
