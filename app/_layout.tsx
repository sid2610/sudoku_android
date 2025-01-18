import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
    screenOptions={{
      headerShown: true,
      headerTitle: 'androidSudoku'
    }}
  >
    <Stack.Screen name="android" options={{
      title: 'android'
    }}/>
  </Stack>;
}
