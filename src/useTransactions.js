import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/categories";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);

  const selectedCategories = transactions.filter((t) => t.type === title);

  const total = selectedCategories.reduce(
    (accumulator, currentValue) => (accumulator += currentValue.amount),
    0
  );

  const categories = title === "Income" ? incomeCategories : expenseCategories;

  console.log({ selectedCategories, total, categories });
};
