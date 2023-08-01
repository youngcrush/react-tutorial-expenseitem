import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const App = () => {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
    { id: 'e2', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)}
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense)
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
