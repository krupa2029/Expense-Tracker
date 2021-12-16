import React, { useEffect, useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import useHttp from "./hook/use-http";
import { getAllExpenses } from "./lib/api";
import LoadingSpinner from "./components/UI/LoadingSpinner";

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

  const onAddExpenseHandler = (added_expense_status) => {
    if (added_expense_status === "completed") {
      sendRequest();
    }
  };

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  let expenses_list;

  if (status === "completed" && (!loadedExpenses || loadedExpenses.length === 0)) {
    expenses_list=<p className="centered focused">No Expense Found!!</p>;
  }
  if (status === "completed" && loadedExpenses && loadedExpenses.length > 0) {
    expenses_list = <Expenses items={loadedExpenses} />;
  }

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      {expenses_list}
    </div>
  );
};

export default App;
