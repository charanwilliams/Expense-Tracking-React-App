import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    props.onSaveExpenseData({
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    });

    console.log(userInput);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-wrap justify-center items-end gap-4 mb-4"
    >
      <div className="flex-initial">
        <label className="block mb-2 font-bold text-white">Title</label>
        <input
          type="text"
          value={userInput.enteredTitle}
          onChange={titleChangeHandler}
          className="p-2 rounded-md border-s-[#ccc] w-80 max-width-[100%]"
        />
      </div>
      <div className="flex-initial">
        <label className="font-bold mb-2 block text-white">Amount</label>
        <input
          type="number"
          value={userInput.enteredAmount}
          min="0.01"
          step="0.01"
          onChange={amountChangeHandler}
          className="p-2 rounded-md border-s-[#ccc] w-80 max-width-[100%]"
        />
      </div>
      <div className="flex-initial">
        <label className="font-bold mb-2 block text-white">Date</label>
        <input
          type="date"
          value={userInput.enteredDate}
          min="2019-01-01"
          max="2023-10-31"
          onChange={dateChangeHandler}
          className="p-2 rounded-md border-s-[#ccc] w-80 max-width-[100%]"
        />
      </div>
      <button
        type="submit"
        className="flex-initial h-[40px] mr-8 cursor-pointer py-1 px-8 rounded-xl text-white bg-sky-600 hover:bg-sky-500 hover:ring-2 hover:ring-sky-200 active:bg-sky-800 active:ring-2 active:ring-sky-900"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
