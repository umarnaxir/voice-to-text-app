import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Moon, Sun} from 'lucide-react-native';
import {AppText} from '../atoms/AppText';
import {useTheme} from '../../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const {theme, themeData, toggleTheme} = useTheme();
  const isDark = theme === 'dark';
  const styles = createStyles(themeData.colors.border);

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <AppText variant="h3">Theme</AppText>
        <AppText variant="caption" color="textSecondary">
          Choose between light and dark mode
        </AppText>
      </View>
      <TouchableOpacity
        style={[
          styles.toggle,
          {backgroundColor: themeData.colors.primary},
        ]}
        onPress={toggleTheme}
        activeOpacity={0.7}>
        <View
          style={[
            styles.thumb,
            isDark && styles.thumbDark,
            {backgroundColor: themeData.colors.background},
          ]}>
          {isDark ? (
            <Moon size={20} color={themeData.colors.text} />
          ) : (
            <Sun size={20} color={themeData.colors.text} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const createStyles = (borderColor: string) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: borderColor,
    },
    info: {
      flex: 1,
      marginRight: 16,
    },
    toggle: {
    width: 64,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  thumb: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translateX: 0}],
  },
  thumbDark: {
    transform: [{translateX: 28}],
  },
});
