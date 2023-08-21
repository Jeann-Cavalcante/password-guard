import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Onboarding from './src/pages/Onboarding';
import { useFonts } from 'expo-font';
import SplashScreen from './src/pages/SplashScreen';
import { useCallback } from 'react';
import { AuthProvider } from './src/contexts/AuthContext';
import { scale } from 'react-native-size-matters';
import 'react-native-gesture-handler';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Black': require('./assets/fonts/Poppins/Poppins-Black.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'BebasNeue-Regular': require('./assets/fonts/BebasNeue-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      <SplashScreen />;
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AuthProvider>
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <Routes />
        <StatusBar style="dark" />
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: scale(20),
  },
});
