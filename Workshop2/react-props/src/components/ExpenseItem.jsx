import './ExpenseItem.css';

const ExpenseItem = (props) => {
  console.log(props);

  return (
    <div className='expenses-container'>
      <h2>{props.name}</h2>
      <div className='expenses-details'>
        <h3>${props.cost}</h3>
        <h3>{props.date.toDateString()}</h3>
      </div>
    </div>
  );
};

export default ExpenseItem;
