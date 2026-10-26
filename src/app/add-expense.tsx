
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
  useExpenses,
  type Expense,
} from '../context/ExpenseContext';

const categories: Expense['category'][] = [
  'Food',
  'Travel',
  'Shopping',
  'Other',
];

export default function AddExpenseScreen() {
  const router = useRouter();
  const { addExpense } = useExpenses();

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

    if (
      !amount.trim() ||
      !Number.isFinite(numericAmount) ||
      numericAmount <= 0
    ) {
      Alert.alert(
        'Validation',
        'Enter an amount greater than zero.',
      );
      return;
    }

    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      Number.isNaN(Date.parse(date)) ||
      new Date(date).toISOString().slice(0, 10) !== date
    ) {
      Alert.alert(
        'Validation',
        'Enter a valid date in YYYY-MM-DD format.',
      );
      return;
    }

    setSaving(true);

    try {
      const newExpense: Expense = {
        id: `${Date.now()}-${Math.random()}`,
        title: title.trim(),
        amount: numericAmount,
        category,
        date,
        createdAt: Date.now(),
      };

    await addExpense(newExpense);
    router.back();
    } catch {
      Alert.alert(
        'Error',
        'Could not save the expense. Please try again.',
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
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
        style={[styles.button, saving && styles.disabled]}
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
  screen: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222222',
    marginTop: 14,
    marginBottom: 8,
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
    backgroundColor: '#134B4A',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 28,
  },
  disabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
