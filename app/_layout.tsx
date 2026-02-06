import '@/global.css';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  return (
    <PaperProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="index" />
      </Stack>
    </PaperProvider>
  );
}
