import ExpenseItem from '../expenseItems/ExpenseItem';
import Card from '../card/Card';
import ExpenseFilter from '../expenseFilter/ExpenseFilter';
import { useState } from 'react/cjs/react.development';

export default function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState('default');
  const filterChangeHandler = (selection) => {
    setSelectedFilter(selection);
  };

  return (
    <div className="app-wrapper">
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedFilter}
          onFilterChange={filterChangeHandler}
        />

        {props.items.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        ))}
      </Card>
    </div>
  );
}
