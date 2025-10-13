import type { PropsWithChildren } from "react";
import { Button as MUIButton, type SxProps } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import { Link } from "react-router";

export default function Button({
  children,
  sx,
  href,
  target,
  variant = "default",
}: ButtonProps) {
  const isExternal =
    !!href && (target === "_blank" || /^https?:\/\//.test(href));

  const linkProps = href
    ? isExternal
      ? {
          component: "a" as const,
          href,
          target,
          rel: target === "_blank" ? "noopener noreferrer" : undefined,
        }
      : { LinkComponent: Link, href }
    : {};

  return (
    <MUIButton
      variant="contained"
      {...linkProps}
      sx={{
        textTransform: "none",
        fontWeight: "bold",
        borderRadius: 1000,
        fontSize: {
          lg: "1.2rem",
        },
        ...VARIANTS[variant],
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
  target?: string;
  variant?: "default" | "purple";
}>;

const VARIANTS = {
  default: {
    backgroundColor: "#fff",
    color: "#1B0048",
  },
  purple: {
    background:
      "linear-gradient(133deg, rgba(229, 229, 229, 0.20) 1.96%, rgba(152, 75, 250, 0.20) 34.68%, rgba(96, 31, 255, 0.20) 62.77%);",
    color: "#fff",
  },
} satisfies { [k: string]: SxProps };
