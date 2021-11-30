import ExpenseDate from '../expenseDate/ExpenseDate';
import Card from '../card/Card';

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="yolo">{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
