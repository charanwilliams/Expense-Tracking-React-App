import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../NewExpense/ExpenseFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState();
  const expenses = props.expenses;
  const filterHandler = (filterYear) => {
    setFilterYear(filterYear);
  };
  return (
    <div className="lg:max-w-[85%] p-4 bg-gradient-to-tl from-sky-300 my-8 mx-auto border-1 rounded-xl text-center shadow-lg">
      <ExpenseFilter onSelectYear={filterHandler} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};
export default Expenses;
