import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../NewExpense/ExpenseFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("");
  const expenses = props.expenses;
  const filterHandler = (filterYear) => {
    setFilterYear(filterYear);
  };

  const filterByDate = (expense) => {
    console.log(filterYear);
    if (filterYear === "") {
      return true;
    } else {
      const expenseYear = expense.date.getUTCFullYear();
      const filterYearDate = new Date(filterYear).getUTCFullYear();
      return expenseYear === filterYearDate;
    }
  };
  
  return (
    <div className="lg:max-w-[85%] p-4 bg-gradient-to-tl from-sky-300 my-8 mx-auto border-1 rounded-xl text-center shadow-lg">
      <ExpenseFilter onSelectYear={filterHandler} />
      {expenses.filter(filterByDate).map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};
export default Expenses;
