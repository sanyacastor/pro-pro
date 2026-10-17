import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

type Props = { children: React.ReactNode };

/**
 * Style wrapper for React islands. Astro pages can hydrate React components that
 * rely on styled-components by composing this provider.
 */
export default function ThemeStyleRegistry({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
