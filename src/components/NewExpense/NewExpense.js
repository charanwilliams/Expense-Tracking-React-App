import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <div className="bg-gradient-to-tl from-sky-300 p-2 m-auto lg:max-w-[85%] rounded-xl text-center shadow-lg ">
      <ExpenseForm />
    </div>
  );
};
export default NewExpense;
