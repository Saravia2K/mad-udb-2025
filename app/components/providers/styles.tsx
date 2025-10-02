import type { PropsWithChildren } from "react";

import "@/assets/css/app.css";
import "@/assets/css/fonts.css";

export default function StylesProvider({ children }: PropsWithChildren) {
  return children;
}
