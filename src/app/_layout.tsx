// import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { useColorScheme } from 'react-native';

// import { AnimatedSplashOverlay } from '@/components/animated-icon';
// import AppTabs from '@/components/app-tabs';

// SplashScreen.preventAutoHideAsync();

// export default function TabLayout() {
//   const colorScheme = useColorScheme();
//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <AnimatedSplashOverlay />
//       <AppTabs />
//     </ThemeProvider>
//   );
// }

// ==================================




// import { Stack } from 'expo-router';

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen
//         name="index"
//         options={{ title: 'Expense Tracker' }}
//       />
//       <Stack.Screen
//         name="add-expense"
//         options={{ title: 'Add Expense' }}
//       />
//       <Stack.Screen
//         name="expense-detail"
//         options={{ title: 'Expense Details' }}
//       />
//       <Stack.Screen
//         name="explore"
//         options={{ title: 'Explore', headerShown: false }}
//       />
//     </Stack>
//   );
// }




import { Stack } from 'expo-router';
import { ExpenseProvider } from '../context/ExpenseContext';

export default function RootLayout() {
  return (
    <ExpenseProvider>
      <Stack />
    </ExpenseProvider>
  );
}