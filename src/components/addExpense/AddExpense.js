import AddExpenseForm from './AddExpenseForm';
import { useState } from 'react';

const AddExpense = (props) => {
  const [formState, setFormState] = useState(false);

  const toggleHandler = () => {
    const desiredState = formState === false ? true : false;
    setFormState(desiredState);
  };

  const expenseSaveHandler = (providedData) => {
    const expenseData = {
      ...providedData,
      id: new Date().valueOf(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="add-expense">
      {!formState && (
        <div className="form-toggle">
          <button onClick={toggleHandler}>Add New Expense</button>
        </div>
      )}

      {formState && (
        <AddExpenseForm
          onExpenseSave={expenseSaveHandler}
          onCancel={toggleHandler}
        />
      )}
    </div>
  );
};

export default AddExpense;
