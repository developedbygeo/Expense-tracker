import { useState } from 'react';
import Card from '../card/Card';
import ExpenseFilter from '../expenseFilter/ExpenseFilter';
import ExpensesList from '../expensesList/ExpensesList';
import ExpensesChart from '../expensesChart/ExpensesChart';

export default function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState('default');
  const filterChangeHandler = (selection) => {
    setSelectedFilter(selection);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear() === parseInt(selectedFilter)
  );

  return (
    <div className="app-wrapper">
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedFilter}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}
