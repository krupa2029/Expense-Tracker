import React,{ useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Car Insuarance', amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e2', title: 'Toilet Paper', amount: 24.00, date: new Date(2020, 9, 2) },
  { id: 'e3', title: 'Book', amount: 94.60, date: new Date(2020, 4, 29) },
  { id: 'e4', title: 'Laptop', amount: 1294.67, date: new Date(2021, 2, 19) },
];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expense);
  };
  

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App;
