import './App.scss';
import Expenses from './components/expenses/Expenses';
import AddExpense from './components/addExpense/AddExpense';
import { useState } from 'react';

const setToLocalStorage = (currentItems) => {
  localStorage.setItem('expenses', JSON.stringify(currentItems));
};

const existingItems = () => {
  const items =
    JSON.parse(localStorage.getItem('expenses')) === null
      ? []
      : JSON.parse(localStorage.getItem('expenses')).map((item) => ({
          title: item.title,
          amount: item.amount,
          id: item.id,
          date: new Date(item.date),
        }));
  return items;
};

const App = () => {
  const [expenses, setExpenses] = useState(existingItems);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevState) => {
      setToLocalStorage([newExpense, ...prevState]);
      return [newExpense, ...prevState];
    });
  };
  return (
    <div className="App">
      <AddExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
