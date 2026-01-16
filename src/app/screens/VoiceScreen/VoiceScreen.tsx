import React from 'react';
import {View} from 'react-native';
import {AppText} from '../../../components/atoms/AppText';
import {VoiceControls} from '../../../components/molecules/VoiceControls';
import {VoiceResultBox} from '../../../components/organisms/VoiceResultBox';
import {useVoiceLogic} from './useVoiceLogic';
import {createStyles} from './VoiceScreen.styles';
import {useTheme} from '../../../hooks/useTheme';

export const VoiceScreen: React.FC = () => {
  const {themeData} = useTheme();
  const styles = createStyles(themeData);
  const {isListening, transcript, error, startListening, stopListening, clearTranscript} =
    useVoiceLogic();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AppText variant="h2" style={styles.title}>
          Voice to Text
        </AppText>
        <AppText variant="bodySmall" color="textSecondary" style={styles.subtitle}>
          Tap the microphone to start listening
        </AppText>

        <VoiceResultBox transcript={transcript} error={error} onClear={clearTranscript} />

        <VoiceControls
          isListening={isListening}
          onStart={startListening}
          onStop={stopListening}
        />
      </View>
    </View>
  );
};
