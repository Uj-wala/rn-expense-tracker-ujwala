
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Expense = {
  id: string;
  title: string;
  amount: number;
  category: 'Food' | 'Travel' | 'Shopping' | 'Other';
  date: string;
  createdAt: number;
};

const STORAGE_KEY = '@expense_tracker_data';

export async function getExpenses(): Promise<Expense[]> {
  const data = await AsyncStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  const parsed: unknown = JSON.parse(data);

  if (!Array.isArray(parsed)) {
    throw new Error('Invalid expense data');
  }

  return parsed as Expense[];
}

export async function saveExpenses(
  expenses: Expense[],
): Promise<void> {
  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(expenses),
  );
}
