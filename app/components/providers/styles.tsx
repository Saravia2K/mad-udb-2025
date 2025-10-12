import type { PropsWithChildren } from "react";

import "@/assets/css/tailwind.css";
import "@/assets/sass/app.scss";
import "@/assets/css/fonts.css";
import "animate.css";

export default function StylesProvider({ children }: PropsWithChildren) {
  return children;
}
