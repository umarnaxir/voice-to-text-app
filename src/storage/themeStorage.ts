import AsyncStorage from '@react-native-async-storage/async-storage';
import {Theme} from '../theme/themes';

const THEME_STORAGE_KEY = '@VoiceToText:theme';

export const themeStorage = {
  async getTheme(): Promise<Theme | null> {
    try {
      const stored = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      return stored as Theme | null;
    } catch {
      return null;
    }
  },

  async setTheme(theme: Theme): Promise<void> {
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage errors
    }
  },
};
