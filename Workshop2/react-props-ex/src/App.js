import './App.css';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const expenses = [
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
    <div className='App'>
      <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} />
      <ExpenseItem expense={expenses[3]} />
      <ExpenseItem expense={expenses[4]} />
    </div>
  );
};

export default App;
