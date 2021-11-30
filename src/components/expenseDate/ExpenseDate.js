const ExpenseDate = (props) => {
  const year = props.date.toLocaleString('en-US', { year: 'numeric' });
  const month = props.date.toLocaleString('en-US', { month: 'short' });
  const day = props.date.toLocaleString('en-US', { day: 'numeric' });

  return (
    <div className="expense-date">
      <div>{month}</div>
      <div className="expense-date-day">{day}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpenseDate;
