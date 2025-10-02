import type { PropsWithChildren } from "react";
import { Box } from "@mui/material";

import fondoContadorDesktop from "@/assets/images/fondo_contador_desktop.webp";
import fondoContadorTablet from "@/assets/images/fondo_contador_tablet.webp";

export default function Main({ children }: PropsWithChildren) {
  return (
    <Box
      component="main"
      position="relative"
      top="0"
      left="0"
      height="100dvh"
      width="100vw"
      px={{ xs: 6, sm: 15 }}
      pt={{ xs: 2 }}
      pb={{ xs: 5 }}
      sx={{
        backgroundSize: "cover",
        backgroundImage: {
          xs: `url(${fondoContadorTablet})`,
          lg: `url(${fondoContadorDesktop})`,
        },
        overflowY: {
          xs: "auto",
          lg: "hidden",
        },
        overflowX: "hidden",
      }}
    >
      {children}
    </Box>
  );
}
