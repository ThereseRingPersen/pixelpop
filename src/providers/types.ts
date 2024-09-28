import { Theme } from "@mui/joy/styles";
import barbieTheme from "../themes/barbieTheme";
import ninetiesTheme from "../themes/ninetiesTheme";
import defaultTheme from "../themes/defaultTheme";

export type ThemeName = "BARBIE" | "NINETIES" | "DEFAULT";

export const themes: Record<ThemeName, Theme> = {
  BARBIE: barbieTheme,
  NINETIES: ninetiesTheme,
  DEFAULT: defaultTheme,
};

export type Mode = 'light' | 'dark';
