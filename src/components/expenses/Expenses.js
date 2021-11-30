import ExpenseItem from '../expenseItems/ExpenseItem';
import Card from '../card/Card';

export default function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ))}
    </Card>
  );
}
