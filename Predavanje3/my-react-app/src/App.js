import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import Student from './components/Student';

const App = () => {

  const students = [
    {
      name: 'Viktor',
      age: 27,
      gender: 'Male'
    },
    {
      name: 'Angela',
      age: 21,
      gender: 'Female'
    },
    {
      name: 'Andrej',
      age: 32,
      gender: 'Male'
    },
    {
      name: 'Marija',
      age: 20,
      gender: 'Female'
    },
    {
      name: 'Andreja',
      age: 20,
      gender: 'Female'
    },
  ];

  return (
    <div>
      <Person/>
      <Student studentInfo={students} />
    </div>
  );
}

export default App;
