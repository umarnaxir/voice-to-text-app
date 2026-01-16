import React from 'react';
import {View} from 'react-native';
import {AppText} from '../../../components/atoms/AppText';
import {createStyles} from './AboutScreen.styles';
import {useTheme} from '../../../hooks/useTheme';

export const AboutScreen: React.FC = () => {
  const {themeData} = useTheme();
  const styles = createStyles(themeData);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AppText variant="h1" style={styles.title}>
          About
        </AppText>

        <View style={styles.infoSection}>
          <AppText variant="body" color="textSecondary">
            Voice to Text app converts your speech into text using device's
            built-in speech recognition engine.
          </AppText>
        </View>
      </View>
    </View>
  );
};
