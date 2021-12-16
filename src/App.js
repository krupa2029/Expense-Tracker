import React, { useEffect, useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import useHttp from "./hook/use-http";
import { getAllExpenses } from "./lib/api";

const App = () => {
  const {
    sendRequest,
    status,
    data: loadedExpenses,
    error,
  } = useHttp(getAllExpenses, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  console.log(loadedExpenses);

  const onAddExpenseHandler = (added_expense_status) => {
    if (added_expense_status === "completed") {
      sendRequest();
    }
  };
  let expenses_list = <p>No Expense Found</p>;
  // if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
  //   return <p>No Expense Found</p>;
  // }
  if (status === "completed" && loadedExpenses && loadedExpenses.length > 0) {
    expenses_list = <Expenses items={loadedExpenses} />;
  }

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      {/* <Expenses items={expenses} /> */}
      {expenses_list}
    </div>
  );
};

export default App;
