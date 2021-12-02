import AddExpenseForm from './AddExpenseForm';

const AddExpense = (props) => {
  const expenseSaveHandler = (providedData) => {
    const expenseData = {
      ...providedData,
      id: new Date().valueOf(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="add-expense">
      <AddExpenseForm onExpenseSave={expenseSaveHandler} />
    </div>
  );
};

export default AddExpense;
