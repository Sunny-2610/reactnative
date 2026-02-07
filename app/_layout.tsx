import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Appearance } from 'react-native';

import { Colors } from '../constants/theme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  // Hide splash screen immediately since we're not loading fonts
  SplashScreen.hideAsync();

  return (
    <Stack screenOptions={{ 
      headerStyle: { backgroundColor: theme.headerBackground }, 
      headerTintColor: theme.text, 
      headerShadowVisible: false 
    }}>
      <Stack.Screen name="index" options={{ headerShown: false, title: 'Home' }} />
      <Stack.Screen name="menu" options={{ headerShown: true, title: 'Menu', headerTitle: 'Coffee Shop Menu' }} />
      <Stack.Screen name="contact" options={{ headerShown: true, title: 'Contact', headerTitle: 'Contact Us' }} />
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
    </Stack>
  );
}