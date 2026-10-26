
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  getExpenses,
  saveExpenses,
  type Expense,
} from '../storage/expenses';

export default function ExpenseDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const [expense, setExpense] = useState<Expense | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadExpense() {
      try {
        const expenses = await getExpenses();
        const found = expenses.find((item) => item.id === id);

        if (found) {
          setExpense(found);
        } else {
          setError('Expense not found.');
        }
      } catch {
        setError('Unable to load expense.');
      } finally {
        setLoading(false);
      }
    }

    loadExpense();
  }, [id]);

  async function handleDelete() {
    Alert.alert(
      'Delete Expense',
      'Are you sure you want to delete this expense?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              const expenses = await getExpenses();
              await saveExpenses(
                expenses.filter((item) => item.id !== id),
              );
              router.replace('/');
            } catch {
              Alert.alert('Error', 'Could not delete expense.');
            }
          },
        },
      ],
    );
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#134B4A" />
        <Text>Loading expense...</Text>
      </View>
    );
  }

  if (error || !expense) {
    return (
      <View style={styles.center}>
        <Text>{error || 'Expense not found.'}</Text>
        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Expense Details</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Title</Text>
        <Text style={styles.value}>{expense.title}</Text>

        <Text style={styles.label}>Amount</Text>
        <Text style={styles.amount}>₹{expense.amount.toFixed(2)}</Text>

        <Text style={styles.label}>Category</Text>
        <Text style={styles.value}>{expense.category}</Text>

        <Text style={styles.label}>Date</Text>
        <Text style={styles.value}>{expense.date}</Text>
      </View>

      <Pressable style={styles.button} onPress={handleDelete}>
        <Text style={styles.buttonText}>Delete Expense</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F7FA' },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#134B4A',
    marginBottom: 20,
  },
  card: { backgroundColor: '#FFFFFF', padding: 20, borderRadius: 14 },
  label: { color: '#666666', marginTop: 14, fontSize: 14 },
  value: { color: '#222222', fontSize: 18, fontWeight: '600', marginTop: 4 },
  amount: {
    color: '#134B4A',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#134B4A',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
});
