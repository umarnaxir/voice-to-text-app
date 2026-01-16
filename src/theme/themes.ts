import {colors} from './colors';
import {spacing} from './spacing';
import {typography} from './typography';

export type Theme = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  border: string;
  primary: string;
  error: string;
  errorBackground: string;
  success: string;
}

export interface AppTheme {
  colors: ThemeColors;
  spacing: typeof spacing;
  typography: typeof typography;
}

export const lightTheme: AppTheme = {
  colors: colors.light,
  spacing,
  typography,
};

export const darkTheme: AppTheme = {
  colors: colors.dark,
  spacing,
  typography,
};

export const getTheme = (theme: Theme): AppTheme => {
  return theme === 'light' ? lightTheme : darkTheme;
};
