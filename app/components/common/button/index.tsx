import type { PropsWithChildren } from "react";
import { Link } from "react-router";
import { Button as MUIButton, type SxProps } from "@mui/material";
import type { Theme } from "@mui/material/styles";

export default function Button({
  children,
  sx,
  href,
  target,
  variant = "default",
  className,
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
      : { LinkComponent: Link, to: href }
    : {};

  return (
    <MUIButton
      variant="contained"
      {...linkProps}
      className={className}
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
  variant?: keyof typeof VARIANTS;
  className?: string;
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
  transparent: {
    background: "rgba(0, 0, 0, 0.30)",
    boxShadow:
      "0 3.754px 1.877px 0 rgba(255, 255, 255, 0.20) inset, 0 1.877px 3.754px 0 rgba(0, 0, 0, 0.20)",
  },
} satisfies { [k: string]: SxProps };
