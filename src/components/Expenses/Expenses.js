import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    // console.log("Expenses.js", selectedYear);
    setFilteredYear(selectedYear);
  }

  const filteredItems = props.items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear;
  });


  let expensesContent = <p>No Expenses Found!!</p>;

  if(filteredItems.length > 0){

    expensesContent = filteredItems.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }


  return (
    <div>
      <Card className="expenses">

        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {expensesContent}

      </Card>
    </div>
  )
}

export default Expenses;