import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

export default function AuthRoutesLayout() {
  const { isSignedIn, isLoaded } = useAuth()

  // Auth durumu yüklenene kadar bekle
  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <Redirect href={'/(tabs)'} />
  }

  return <Stack screenOptions={{ headerShown: false }} />
}