import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { FC, useEffect } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout: FC = () => {
  const [loaded] = useFonts({
    Regular400: require('../assets/fonts/avenir-font/AvenirLTStd-Book.otf'),
    Medium500: require('../assets/fonts/avenir-font/AvenirLTStd-Medium.otf'),
    Bold700: require('../assets/fonts/helvetica-neue-5/HelveticaNeueBold.otf'),
    Black800: require('../assets/fonts/avenir-font/AvenirLTStd-Heavy.otf'),
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  return loaded ? (
    <GestureHandlerRootView style={styles.gestureHandler}>
      <SafeAreaView style={styles.safeArea}>
        <Stack
          screenOptions={{
            animation: 'fade',
            headerShown: false,
            contentStyle: { backgroundColor: 'white' },
          }}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  ) : null;
};

export default RootLayout;

const styles = StyleSheet.create({
  gestureHandler: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
});
