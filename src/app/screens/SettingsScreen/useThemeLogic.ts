import {useTheme} from '../../../hooks/useTheme';

export const useThemeLogic = () => {
  const {theme, toggleTheme} = useTheme();
  const isDark = theme === 'dark';

  return {
    theme,
    isDark,
    toggleTheme,
  };
};
