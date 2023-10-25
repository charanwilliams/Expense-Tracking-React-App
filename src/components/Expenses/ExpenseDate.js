const ExpenseDate = (props) => {
  const ordinalDate = (date) => {
    if (date > 3 && date < 21) return "th";
    switch (date % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getUTCFullYear();
  const day = props.date.getUTCDate();

  return (
    <div className="flex flex-col w-20 h-20 border-1 border-[#ececec] text-white text-center rounded-xl items-center justify-center bg-sky-600">
      <div>
        <div className="flex-initial text-s font-bold">{month}</div>
        <div className="flex-initial text-2xl font-bold">
          {day + ordinalDate(day)}
        </div>
        <div className="flex-initial text-s">{year}</div>
      </div>
    </div>
  );
};

export default ExpenseDate;
