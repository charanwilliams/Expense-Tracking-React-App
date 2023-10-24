import React from "react";
import ExpenseDate from "./ExpenseDate.js";

const ExpenseItem = (props) => {
  return (
    <div className="flex justify-between items-center p-2 my-4 mx-0 bg-[#f7f2f2] rounded-xl shadow-xl">
      <ExpenseDate
        date={props.date}
        className="flex-initial justify-self-start"
      ></ExpenseDate>
      <div className="flex-initial w-60  text-[#437da6] text-xl my-0 mx-4 font-extrabold">
        <h2>{props.title}</h2>
      </div>
      <div className="flex-initial w-40 text-2xl font-bold text-[#242b37]">
        ${props.amount}
      </div>
    </div>
  );
};

export default ExpenseItem;
