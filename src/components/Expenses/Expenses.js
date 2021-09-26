import { useState } from "react";

import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    // console.log("Expenses.js", selectedYear);
    setFilteredYear(selectedYear);
  }

  const filteredItems = props.items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear;
  });



  return (
    <div>
      <Card className="expenses">

        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredItems}/>
        <ExpensesList fitems={filteredItems} />
      </Card>
    </div>
  )
}

export default Expenses;