const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="flex flex-col w-20 h-20 border-1 border-[#ececec] text-white text-center rounded-xl items-center justify-center bg-sky-600">
      <div>
        <div className="flex-initial text-s font-bold">{month}</div>
        <div className="flex-initial text-xs">{year}</div>
        <div className="flex-initial text-2xl font-bold">{day}</div>
      </div>
    </div>
  );
};

export default ExpenseDate;
