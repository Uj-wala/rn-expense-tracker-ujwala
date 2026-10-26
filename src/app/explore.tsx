// import { Image } from 'expo-image';
// import { SymbolView } from 'expo-symbols';
// import { Platform, Pressable, ScrollView, StyleSheet } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import { ExternalLink } from '@/components/external-link';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { Collapsible } from '@/components/ui/collapsible';
// import { WebBadge } from '@/components/web-badge';
// import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
// import { useTheme } from '@/hooks/use-theme';

// export default function TabTwoScreen() {
//   const safeAreaInsets = useSafeAreaInsets();
//   const insets = {
//     ...safeAreaInsets,
//     bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
//   };
//   const theme = useTheme();

//   const contentPlatformStyle = Platform.select({
//     android: {
//       paddingTop: insets.top,
//       paddingLeft: insets.left,
//       paddingRight: insets.right,
//       paddingBottom: insets.bottom,
//     },
//     web: {
//       paddingTop: Spacing.six,
//       paddingBottom: Spacing.four,
//     },
//   });

//   return (
//     <ScrollView
//       style={[styles.scrollView, { backgroundColor: theme.background }]}
//       contentInset={insets}
//       contentContainerStyle={[styles.contentContainer, contentPlatformStyle]}>
//       <ThemedView style={styles.container}>
//         <ThemedView style={styles.titleContainer}>
//           <ThemedText type="subtitle">Explore</ThemedText>
//           <ThemedText style={styles.centerText} themeColor="textSecondary">
//             This starter app includes example{'\n'}code to help you get started.
//           </ThemedText>

//           <ExternalLink href="https://docs.expo.dev" asChild>
//             <Pressable style={({ pressed }) => pressed && styles.pressed}>
//               <ThemedView type="backgroundElement" style={styles.linkButton}>
//                 <ThemedText type="link">Expo documentation</ThemedText>
//                 <SymbolView
//                   tintColor={theme.text}
//                   name={{ ios: 'arrow.up.right.square', android: 'link', web: 'link' }}
//                   size={12}
//                 />
//               </ThemedView>
//             </Pressable>
//           </ExternalLink>
//         </ThemedView>

//         <ThemedView style={styles.sectionsWrapper}>
//           <Collapsible title="File-based routing">
//             <ThemedText type="small">
//               This app has two screens: <ThemedText type="code">src/app/index.tsx</ThemedText> and{' '}
//               <ThemedText type="code">src/app/explore.tsx</ThemedText>
//             </ThemedText>
//             <ThemedText type="small">
//               The layout file in <ThemedText type="code">src/app/_layout.tsx</ThemedText> sets up
//               the tab navigator.
//             </ThemedText>
//             <ExternalLink href="https://docs.expo.dev/router/introduction">
//               <ThemedText type="linkPrimary">Learn more</ThemedText>
//             </ExternalLink>
//           </Collapsible>

//           <Collapsible title="Android, iOS, and web support">
//             <ThemedView type="backgroundElement" style={styles.collapsibleContent}>
//               <ThemedText type="small">
//                 You can open this project on Android, iOS, and the web. To open the web version,
//                 press <ThemedText type="smallBold">w</ThemedText> in the terminal running this
//                 project.
//               </ThemedText>
//               <Image
//                 source={require('@/assets/images/tutorial-web.png')}
//                 style={styles.imageTutorial}
//               />
//             </ThemedView>
//           </Collapsible>

//           <Collapsible title="Images">
//             <ThemedText type="small">
//               For static images, you can use the <ThemedText type="code">@2x</ThemedText> and{' '}
//               <ThemedText type="code">@3x</ThemedText> suffixes to provide files for different
//               screen densities.
//             </ThemedText>
//             <Image source={require('@/assets/images/react-logo.png')} style={styles.imageReact} />
//             <ExternalLink href="https://reactnative.dev/docs/images">
//               <ThemedText type="linkPrimary">Learn more</ThemedText>
//             </ExternalLink>
//           </Collapsible>

//           <Collapsible title="Light and dark mode components">
//             <ThemedText type="small">
//               This template has light and dark mode support. The{' '}
//               <ThemedText type="code">useColorScheme()</ThemedText> hook lets you inspect what the
//               user&apos;s current color scheme is, and so you can adjust UI colors accordingly.
//             </ThemedText>
//             <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
//               <ThemedText type="linkPrimary">Learn more</ThemedText>
//             </ExternalLink>
//           </Collapsible>

//           <Collapsible title="Animations">
//             <ThemedText type="small">
//               This template includes an example of an animated component. The{' '}
//               <ThemedText type="code">src/components/ui/collapsible.tsx</ThemedText> component uses
//               the powerful <ThemedText type="code">react-native-reanimated</ThemedText> library to
//               animate opening this hint.
//             </ThemedText>
//           </Collapsible>
//         </ThemedView>
//         {Platform.OS === 'web' && <WebBadge />}
//       </ThemedView>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   scrollView: {
//     flex: 1,
//   },
//   contentContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   container: {
//     maxWidth: MaxContentWidth,
//     flexGrow: 1,
//   },
//   titleContainer: {
//     gap: Spacing.three,
//     alignItems: 'center',
//     paddingHorizontal: Spacing.four,
//     paddingVertical: Spacing.six,
//   },
//   centerText: {
//     textAlign: 'center',
//   },
//   pressed: {
//     opacity: 0.7,
//   },
//   linkButton: {
//     flexDirection: 'row',
//     paddingHorizontal: Spacing.four,
//     paddingVertical: Spacing.two,
//     borderRadius: Spacing.five,
//     justifyContent: 'center',
//     gap: Spacing.one,
//     alignItems: 'center',
//   },
//   sectionsWrapper: {
//     gap: Spacing.five,
//     paddingHorizontal: Spacing.four,
//     paddingTop: Spacing.three,
//   },
//   collapsibleContent: {
//     alignItems: 'center',
//   },
//   imageTutorial: {
//     width: '100%',
//     aspectRatio: 296 / 171,
//     borderRadius: Spacing.three,
//     marginTop: Spacing.two,
//   },
//   imageReact: {
//     width: 100,
//     height: 100,
//     alignSelf: 'center',
//   },
// });


// =============


import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  getExpenses,
  saveExpenses,
  type Expense,
} from '../storage/expenses';

const categories = ['Food', 'Travel', 'Shopping', 'Other'] as const;

export default function AddExpenseScreen() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] =
    useState<Expense['category']>('Food');
  const [date, setDate] = useState(
    new Date().toISOString().slice(0, 10),
  );
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    if (!title.trim()) {
      Alert.alert('Validation', 'Please enter an expense title.');
      return;
    }

    const numericAmount = Number(amount);

    if (!amount.trim() || !Number.isFinite(numericAmount) || numericAmount <= 0) {
      Alert.alert('Validation', 'Amount must be a number greater than zero.');
      return;
    }

    if (!date.trim() || Number.isNaN(Date.parse(date))) {
      Alert.alert('Validation', 'Please enter a valid date (YYYY-MM-DD).');
      return;
    }

    setSaving(true);

    try {
      const existing = await getExpenses();

      const newExpense: Expense = {
        id: `${Date.now()}-${Math.random()}`,
        title: title.trim(),
        amount: numericAmount,
        category,
        date,
        createdAt: Date.now(),
      };

      await saveExpenses([newExpense, ...existing]);
      router.back();
    } catch {
      Alert.alert('Error', 'Unable to save expense. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Expense Title</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Lunch"
        value={title}
        onChangeText={setTitle}
        maxLength={100}
      />

      <Text style={styles.label}>Amount (₹)</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 250"
        value={amount}
        onChangeText={setAmount}
        keyboardType="decimal-pad"
      />

      <Text style={styles.label}>Category</Text>
      <View style={styles.categories}>
        {categories.map((item) => (
          <Pressable
            key={item}
            style={[
              styles.category,
              category === item && styles.selectedCategory,
            ]}
            onPress={() => setCategory(item)}
          >
            <Text
              style={[
                styles.categoryText,
                category === item && styles.selectedText,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.label}>Date (YYYY-MM-DD)</Text>
      <TextInput
        style={styles.input}
        placeholder="2026-10-15"
        value={date}
        onChangeText={setDate}
      />

      <Pressable
        style={[styles.button, saving && styles.disabledButton]}
        onPress={handleSave}
        disabled={saving}
      >
        <Text style={styles.buttonText}>
          {saving ? 'Saving...' : 'Save Expense'}
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F7FA',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 12,
    color: '#222222',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D5DADD',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  category: {
    borderWidth: 1,
    borderColor: '#134B4A',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  selectedCategory: {
    backgroundColor: '#134B4A',
  },
  categoryText: {
    color: '#134B4A',
  },
  selectedText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 28,
    backgroundColor: '#134B4A',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
