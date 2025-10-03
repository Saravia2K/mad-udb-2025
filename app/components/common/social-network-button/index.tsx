import type { JSX } from "react";

import "./social-network-button.css";

export default function SocialNetworkButton({
  icon,
  href,
}: SocialNetworkButtonProps) {
  return (
    <a
      className="social-network-button size-10.5 p-2 xl:size-14 xl:p-2.5"
      href={href}
      target="_blank"
    >
      {icon}
    </a>
  );
}

type SocialNetworkButtonProps = {
  icon: JSX.Element;
  href: string;
};
