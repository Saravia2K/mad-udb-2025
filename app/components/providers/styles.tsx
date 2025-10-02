import type { PropsWithChildren } from "react";

import "@/app.css";
import "@/fonts.css";

export default function StylesProvider({ children }: PropsWithChildren) {
  return children;
}
