import React from 'react';
import {View} from 'react-native';
import {AppText} from '../../../components/atoms/AppText';
import {ThemeToggle} from '../../../components/molecules/ThemeToggle';
import {useThemeLogic} from './useThemeLogic';
import {createStyles} from './SettingsScreen.styles';
import {useTheme} from '../../../hooks/useTheme';

export const SettingsScreen: React.FC = () => {
  const {themeData} = useTheme();
  const styles = createStyles(themeData);
  const {isDark} = useThemeLogic();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AppText variant="h1" style={styles.header}>
          Settings
        </AppText>

        <View style={styles.section}>
          <ThemeToggle />
          <View style={styles.currentThemeContainer}>
            <AppText variant="caption" color="textSecondary" style={{textAlign: 'center'}}>
              Current theme: {isDark ? 'Dark' : 'Light'}
            </AppText>
          </View>
        </View>
      </View>
    </View>
  );
};
