import { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    // console.log("Expenses.js", selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredItems = props.items.filter((item) => {
    var loadedDate = new Date(item.date);
    var year = loadedDate.getFullYear();
    return year.toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList fitems={filteredItems} />
      </Card>
    </div>
  );
}

export default Expenses;
