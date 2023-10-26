import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../NewExpense/ExpenseFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("");

  const filterHandler = (filterYear) => {
    setFilterYear(filterYear);
  };

  const filterByDate = (expense) => {
    if (filterYear === "") {
      return true;
    } else {
      const expenseYear = expense.date.getUTCFullYear();
      const filterYearDate = new Date(filterYear).getUTCFullYear();
      return expenseYear === filterYearDate;
    }
  };

  const expenses = props.expenses;

  const filteredExpenses = expenses.filter(filterByDate);
  let expensesContent = (
    <p className="text-white font-bold text-3xl p-8">
      No expenses found for selected year...
    </p>
  );

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div className="lg:max-w-[85%] p-4 bg-gradient-to-tl from-sky-300 my-8 mx-auto border-1 rounded-xl text-center shadow-lg">
      <ExpenseFilter onSelectYear={filterHandler} />
      {expensesContent}
    </div>
  );
};
export default Expenses;
