import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const { expense } = props;

  return (
    <div className='expenses-container'>
      <h2>{expense.name}</h2>
      <div className='expenses-details'>
        <h3>${expense.cost}</h3>
        <h3>{expense.date.toDateString()}</h3>
      </div>
    </div>
  );
};

export default ExpenseItem;
