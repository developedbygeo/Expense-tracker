import { useState } from 'react';

const AddExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    inputTitle: '',
    inputPrice: '',
    inputDate: '',
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, inputTitle: e.target.value };
    });
  };

  const priceChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, inputPrice: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, inputDate: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: userInput.inputTitle,
      date: new Date(userInput.inputDate),
      amount: userInput.inputPrice,
    };
    props.onExpenseSave(expenseData);
    setUserInput(() => {
      return {
        inputTitle: '',
        inputPrice: '',
        inputDate: '',
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="add-expense__ctrls">
        <div className="add-expense__ctrl">
          <label>Item</label>
          <input
            onChange={titleChangeHandler}
            value={userInput.inputTitle}
            type="text"
            placeholder="Item purchased"
          />
        </div>
        <div className="add-expense__ctrl">
          <label>Price</label>
          <input
            onChange={priceChangeHandler}
            value={userInput.inputPrice}
            type="number"
            placeholder="Amount paid"
          ></input>
        </div>
        <div className="add-expense__ctrl">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            value={userInput.inputDate}
            type="date"
            min="2019-01-01"
            max="2025-12-31"
          />
        </div>
      </div>
      <div className="add-expense__actions">
        <button type="submit">Add New</button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
