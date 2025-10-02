import type { JSX } from "react";

import "./social-network-button.css";

export default function SocialNetworkButton({
  icon,
  href,
}: SocialNetworkButtonProps) {
  return (
    <a className="social-network-button" href={href} target="_blank">
      {icon}
    </a>
  );
}

type SocialNetworkButtonProps = {
  icon: JSX.Element;
  href: string;
};
