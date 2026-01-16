import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Mic, Square} from 'lucide-react-native';
import {AppButton} from '../atoms/AppButton';
import {AppText} from '../atoms/AppText';
import {useTheme} from '../../hooks/useTheme';

interface VoiceControlsProps {
  isListening: boolean;
  onStart: () => void;
  onStop: () => void;
}

export const VoiceControls: React.FC<VoiceControlsProps> = ({
  isListening,
  onStart,
  onStop,
}) => {
  const {themeData} = useTheme();

  return (
    <View style={styles.container}>
      {isListening && (
        <View style={styles.listeningContainer}>
          <ActivityIndicator
            size="small"
            color={themeData.colors.error}
            style={styles.indicator}
          />
          <AppText variant="bodySmall" color="textSecondary">
            Listening...
          </AppText>
        </View>
      )}

      <AppButton
        variant={isListening ? 'error' : 'primary'}
        style={styles.button}
        onPress={isListening ? onStop : onStart}>
        {isListening ? (
          <Square size={32} color={themeData.colors.background} />
        ) : (
          <Mic size={32} color={themeData.colors.background} />
        )}
      </AppButton>

      <AppText variant="caption" color="textSecondary" style={styles.label}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  listeningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  indicator: {
    marginRight: 8,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  label: {
    textAlign: 'center',
  },
});
