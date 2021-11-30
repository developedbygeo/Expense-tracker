const AddExpenseForm = () => {
  return (
    <form>
      <div className="add-expense__ctrls">
        <div className="add-expense__ctrl">
          <label>Item</label>
          <input type="text" placeholder="Item purchased" />
        </div>
        <div className="add-expense__ctrl">
          <label>Price</label>
          {/* <input type="number" placeholder="Price" min="0.01" step="0.01" /> */}
          <input type="tel" placeholder="Amount paid"></input>
        </div>
        <div className="add-expense__ctrl">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2025-12-31" />
        </div>
      </div>
      <div className="add-expense__actions">
        <button type="submit">Add New</button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
