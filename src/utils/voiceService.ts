import Voice from '@react-native-voice/voice';

export interface VoiceEventHandlers {
  onStart?: () => void;
  onEnd?: () => void;
  onResults?: (text: string) => void;
  onError?: (error: string) => void;
}

class VoiceService {
  private handlers: VoiceEventHandlers = {};
  private isInitialized = false;

  initialize(handlers: VoiceEventHandlers) {
    if (!Voice) {
      handlers.onError?.('Speech recognition is not available.');
      return;
    }

    this.handlers = handlers;
    this.setupListeners();
    this.isInitialized = true;
  }

  private setupListeners() {
    Voice.onSpeechStart = () => {
      this.handlers.onStart?.();
    };

    Voice.onSpeechEnd = () => {
      this.handlers.onEnd?.();
    };

    Voice.onSpeechResults = (e) => {
      if (e.value && e.value.length > 0) {
        this.handlers.onResults?.(e.value[0]);
      }
    };

    Voice.onSpeechError = (event) => {
      const errorMessage = this.getErrorMessage(event.error);
      this.handlers.onError?.(errorMessage);
    };
  }

  private getErrorMessage(error: any): string {
    switch (error?.code) {
      case 'no_match':
        return 'No speech detected. Please try again.';
      case 'not_available':
        return 'Speech recognition is not available on this device.';
      case 'network':
        return 'Network error. Please check your connection.';
      default:
        return error?.message || 'Speech recognition failed.';
    }
  }

  async start(): Promise<void> {
    if (!this.isInitialized || !Voice) {
      throw new Error('Voice service not initialized');
    }

    const isAvailable = await Voice.isAvailable();
    if (!isAvailable) {
      throw new Error('Microphone permission required');
    }

    await Voice.start('en-US');
  }

  async stop(): Promise<void> {
    if (!Voice) {
      return;
    }
    await Voice.stop();
  }

  async destroy(): Promise<void> {
    if (!Voice) {
      return;
    }
    try {
      await Voice.destroy();
      Voice.removeAllListeners();
    } catch {
      // Ignore cleanup errors
    }
  }
}

export const voiceService = new VoiceService();
