import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INTIAL_EXPENSES = [
  { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
  { id: 'e2', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)}
];

const App = () => {
  const [expenses, setExpenses] = useState(INTIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'Let\'s Get Started!'),
  //   React.createElement(Expenses, {items: expenses})
  // );
  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
