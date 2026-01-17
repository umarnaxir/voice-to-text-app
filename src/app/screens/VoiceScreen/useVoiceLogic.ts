import {useState, useEffect, useCallback, useRef} from 'react';
import {Alert} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {voiceService, VoiceEventHandlers} from '../../../utils/voiceService';
import {filterProfanity} from '../../../utils/profanityFilter';

export const useVoiceLogic = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) {
      return;
    }

    const handlers: VoiceEventHandlers = {
      onStart: () => {
        setIsListening(true);
        setError(null);
      },
      onEnd: () => {
        setIsListening(false);
      },
      onResults: (text) => {
        console.log('Transcribed text:', text);
        const filteredText = filterProfanity(text);
        console.log('Filtered text:', filteredText);
        setTranscript(filteredText);
      },
      onError: (errorMessage) => {
        setIsListening(false);
        setError(errorMessage);
        Alert.alert('Error', errorMessage);
      },
    };

    voiceService.initialize(handlers);
    isInitialized.current = true;

    return () => {
      voiceService.destroy();
      isInitialized.current = false;
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (isListening) {
          voiceService.stop();
          setIsListening(false);
        }
      };
    }, [isListening]),
  );

  const startListening = useCallback(async () => {
    try {
      setError(null);
      setTranscript('');
      await voiceService.start();
    } catch (err: any) {
      const message = err.message || 'Failed to start listening';
      setError(message);
      Alert.alert('Error', message);
    }
  }, []);

  const stopListening = useCallback(async () => {
    try {
      await voiceService.stop();
      setIsListening(false);
    } catch (err: any) {
      const message = err.message || 'Failed to stop listening';
      setError(message);
    }
  }, []);

  const clearTranscript = useCallback(() => {
    setTranscript('');
    setError(null);
  }, []);

  return {
    isListening,
    transcript,
    error,
    startListening,
    stopListening,
    clearTranscript,
  };
};
