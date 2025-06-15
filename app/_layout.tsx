import { Stack } from 'expo-router';
import { CartProvider } from '../components/CartContext';
import { UserProvider } from '../components/UserContext';
import { theme } from '../constants/theme';

export default function RootLayout() {
  return (
    <UserProvider>
      <CartProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: theme.colors.background,
            },
          }}
        >
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(app)" />
        </Stack>
      </CartProvider>
    </UserProvider>
  );
}
