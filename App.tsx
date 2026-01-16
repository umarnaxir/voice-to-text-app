import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from './src/theme/ThemeProvider';
import {RootNavigator} from './src/app/navigation/RootNavigator';
import {useTheme} from './src/hooks/useTheme';

function AppContent() {
  const {theme, themeData} = useTheme();

  return (
    <>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={themeData.colors.background}
      />
      <RootNavigator />
    </>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;