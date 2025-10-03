import type { PropsWithChildren } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export default function MUIThemeProvider({ children }: PropsWithChildren) {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
