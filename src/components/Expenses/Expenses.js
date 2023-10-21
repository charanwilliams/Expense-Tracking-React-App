import React, {useState} from 'react'

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../NewExpense/ExpenseFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState();
  const expenses = props.expenses;
  const filterHandler = (filterYear) => {
    setFilterYear(filterYear);
}
  return (
    <Card className="lg:max-w-[85%] p-4 bg-gradient-to-tl from-sky-300 my-8 mx-auto border-1 rounded-xl text-center shadow-lg">
      <ExpenseFilter onSelectYear={filterHandler}/>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
};
export default Expenses;
