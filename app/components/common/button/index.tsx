import type { PropsWithChildren } from "react";
import { Button as MUIButton, type SxProps } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import { Link } from "react-router";

export default function Button({ children, sx, href }: ButtonProps) {
  return (
    <MUIButton
      variant="contained"
      LinkComponent={Link}
      href={href}
      sx={{
        textTransform: "none",
        backgroundColor: "#fff",
        color: "#1B0048",
        fontWeight: "bold",
        borderRadius: 1000,
        fontSize: {
          lg: "1.2rem",
        },
        ...sx,
      }}
    >
      {children}
    </MUIButton>
  );
}

type ButtonProps = PropsWithChildren<{
  sx?: SxProps<Theme>;
  href?: string;
}>;
