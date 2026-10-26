import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

export type Expense = {
  id: string;
  title: string;
  amount: number;
  category: 'Food' | 'Travel' | 'Shopping' | 'Other';
  date: string;
  createdAt: number;
};

const STORAGE_KEY = '@expense_tracker_data';

type ExpenseContextType = {
  expenses: Expense[];
  loading: boolean;
  addExpense: (expense: Expense) => Promise<void>;
  deleteExpense: (id: string) => Promise<void>;
};

const ExpenseContext = createContext<ExpenseContextType | undefined>(
  undefined,
);

export function ExpenseProvider({ children }: { children: ReactNode }) {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadExpenses() {
      try {
        const data = await AsyncStorage.getItem(STORAGE_KEY);

        if (data) {
          const parsed: unknown = JSON.parse(data);

          if (Array.isArray(parsed)) {
            setExpenses(
              (parsed as Expense[]).sort(
                (a, b) => b.createdAt - a.createdAt,
              ),
            );
          }
        }
      } catch {
        // Keep the app usable if stored data cannot be read.
      } finally {
        setLoading(false);
      }
    }

    loadExpenses();
  }, []);

  const addExpense = useCallback(async (expense: Expense) => {
    const updatedExpenses = [expense, ...expenses];

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedExpenses),
    );

    setExpenses(updatedExpenses);
  }, [expenses]);

  const deleteExpense = useCallback(async (id: string) => {
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== id,
    );

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedExpenses),
    );

    setExpenses(updatedExpenses);
  }, [expenses]);

  return (
    <ExpenseContext.Provider
      value={{ expenses, loading, addExpense, deleteExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpenses() {
  const context = useContext(ExpenseContext);

  if (!context) {
    throw new Error('useExpenses must be used within ExpenseProvider');
  }

  return context;
}