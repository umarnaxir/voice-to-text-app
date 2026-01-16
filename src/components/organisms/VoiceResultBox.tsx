import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {X} from 'lucide-react-native';
import {AppText} from '../atoms/AppText';
import {useTheme} from '../../hooks/useTheme';

interface VoiceResultBoxProps {
  transcript: string;
  error?: string | null;
  onClear?: () => void;
}

export const VoiceResultBox: React.FC<VoiceResultBoxProps> = ({
  transcript,
  error,
  onClear,
}) => {
  const {themeData} = useTheme();

  return (
    <View style={styles.container}>
      {error && (
        <View
          style={[
            styles.errorContainer,
            {backgroundColor: themeData.colors.errorBackground},
          ]}>
          <AppText variant="caption" style={{color: themeData.colors.error}}>
            {error}
          </AppText>
        </View>
      )}

      <View style={styles.labelContainer}>
        <AppText variant="label">Transcript:</AppText>
        {transcript && onClear && (
          <TouchableOpacity
            onPress={onClear}
            style={styles.clearButton}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
            <X size={18} color={themeData.colors.textSecondary} />
          </TouchableOpacity>
        )}
      </View>

      <View
        style={[
          styles.textBox,
          {
            backgroundColor: themeData.colors.surface,
            borderColor: themeData.colors.border,
          },
        ]}>
        {transcript ? (
          <AppText variant="body">{transcript}</AppText>
        ) : (
          <AppText variant="bodySmall" color="textTertiary" style={styles.placeholder}>
            Your speech will appear here...
          </AppText>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 40,
  },
  errorContainer: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  clearButton: {
    padding: 4,
  },
  textBox: {
    minHeight: 150,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  placeholder: {
    fontStyle: 'italic',
  },
});
