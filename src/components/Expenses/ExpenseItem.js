import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate.js";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <Card className="flex flex-start justify-start items-center p-2 my-4 mx-0 bg-[#f7f2f2] rounded-xl shadow-xl">
      <ExpenseDate date={props.date} className="flex-none"></ExpenseDate>
      <div className="flex-1  text-[#437da6] text-xl my-0 mx-4 font-extrabold">
        <h2>{title}</h2>
      </div>
      <div className="flex-1 text-2xl font-bold text-[#242b37]">${props.amount}</div>
      <div>
        <button
          onClick={clickHandler}
          className="flex-1 cursor-pointer py-4 px-8 rounded-xl text-white bg-sky-600 m-4 hover:bg-sky-500 hover:ring-2 hover:ring-sky-200 active:bg-sky-800 active:ring-2 active:ring-sky-900"
        >
          Change Title
        </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
