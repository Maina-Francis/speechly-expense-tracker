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

  const transactionsPerType = transactions.filter((t) => t.type === title);

  const total = transactionsPerType.reduce(
    (accumulator, currentValue) => (accumulator += currentValue.amount),
    0
  );

  const categories = title === "Income" ? incomeCategories : expenseCategories;

  console.log({ transactionsPerType, total, categories });

  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    // if the category exist, increment the amount
    if (category) category.amount += t.amount;
  });

  //   filter categories with amount = 0 (delete them) so that we can use with our charts
  const filteredCategories = categories.filter((c) => c.amount > 0);

  const chartData = {
    // follow chart.js rules to create our chart
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],

    labels: filteredCategories.map((c) => c.type),
  };

  return { filteredCategories, total, chartData };
};

export default useTransactions;
