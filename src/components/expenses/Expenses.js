import ExpenseItem from '../expenseItems/ExpenseItem';
import Card from '../card/Card';
import ExpenseFilter from '../expenseFilter/ExpenseFilter';
import { useState } from 'react/cjs/react.development';

export default function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState('default');
  const filterChangeHandler = (selection) => {
    setSelectedFilter(selection);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear() === parseInt(selectedFilter)
  );

  let expensesContent = <p>No data found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        date={item.date}
        amount={item.amount}
      />
    ));
  }

  return (
    <div className="app-wrapper">
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedFilter}
          onFilterChange={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}
