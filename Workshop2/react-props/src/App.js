import './App.css';

import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const expenseList = [
    {
      id: 1,
      name: 'Car Service',
      cost: 50,
      date: new Date(2023, 9, 1),
    },
    {
      id: 2,
      name: 'Dentist',
      cost: 20,
      date: new Date(2023, 8, 21),
    },
    {
      id: 3,
      name: 'Groceries',
      cost: 25,
      date: new Date(2023, 9, 7),
    },
    {
      id: 4,
      name: 'Drum Lessons',
      cost: 100,
      date: new Date(2023, 9, 10),
    },
    {
      id: 5,
      name: 'Laptop',
      cost: 500,
      date: new Date(2023, 8, 10),
    },
  ];

  return (
    <div className="App">
      <ExpenseItem name={expenseList[0].name} cost={expenseList[0].cost} date={expenseList[0].date}/>
      <ExpenseItem name={expenseList[1].name} cost={expenseList[1].cost} date={expenseList[1].date}/>
      <ExpenseItem name={expenseList[2].name} cost={expenseList[2].cost} date={expenseList[2].date}/>
      <ExpenseItem name={expenseList[3].name} cost={expenseList[3].cost} date={expenseList[3].date}/>
      <ExpenseItem name={expenseList[4].name} cost={expenseList[4].cost} date={expenseList[4].date}/>
    </div>
  );
}

export default App;
