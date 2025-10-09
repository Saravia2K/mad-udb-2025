import type { PropsWithChildren } from "react";

import "@/assets/css/app.css";
import "@/assets/css/fonts.css";
import "animate.css";

export default function StylesProvider({ children }: PropsWithChildren) {
  return children;
}
