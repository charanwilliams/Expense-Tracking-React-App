import React from 'react'

const ExpensesFilter = (props) => {
  
  const selectHandler = (event) => {
    const filterYear=event.target.value;
    props.onSelectYear(filterYear);
  };

  return (
    <div className="flex items-center justify-end  py-0 px-1">
      <label className="flex-shrink text-white font-bold mb-2">
        Filter by year
      </label>
      <select
        onChange={selectHandler}
        className="flex-shrink py-2 px-4 rounded-md ml-4 bg-white"
      >
        <option className="bg-white" value="2023">
          2023
        </option>
        <option className="bg-white" value="2022">
          2022
        </option>
        <option className="bg-white" value="2021">
          2021
        </option>
        <option className="bg-white" value="2020">
          2020
        </option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
