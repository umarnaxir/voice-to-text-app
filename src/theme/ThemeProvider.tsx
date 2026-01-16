import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {Theme, getTheme, AppTheme} from './themes';
import {themeStorage} from '../storage/themeStorage';

interface ThemeContextType {
  theme: Theme;
  themeData: AppTheme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  themeData: getTheme('light'),
  toggleTheme: () => {},
  setTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({children}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeTheme = async () => {
      const storedTheme = await themeStorage.getTheme();
      if (storedTheme) {
        setThemeState(storedTheme);
      }
      setIsInitialized(true);
    };
    initializeTheme();
  }, []);

  const setTheme = async (newTheme: Theme) => {
    setThemeState(newTheme);
    await themeStorage.setTheme(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const themeData = getTheme(theme);

  if (!isInitialized) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{theme, themeData, toggleTheme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
