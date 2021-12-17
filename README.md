# Expense-Tracker

A Webapp that allow user to add and track their expenses trough out a year and show estimation of expenses as a Chart. 
* Visit: **[Live Demo](https://expense-tracker-bfbd6.web.app/)**

## Used React Concepts
* [React Components & Props](https://reactjs.org/docs/components-and-props.html): Reuseable components, Passing data through parent to child component using props.
* [React Hooks](https://reactjs.org/docs/hooks-intro.html) : useEffect, useState, useReducer, useCallback, useRef
* [Custom Hooks](https://reactjs.org/docs/hooks-custom.html) : use-http


## Dependencies Installed
* node_modules


## Main Components

* NewExpenses - It renders the form to add new-expense. Then send the POST request to the server and store newly added expense to the database. The form contains Expense-Name, Amount and Date.

* Chart - The Component that estimates the expense data and display it in the form of chartbar.

* ExpenseFilter - Filters the expenseitems by years. And Chart will be displayed according to year selected in the filter.

* Expenses - It is primary component that is responsible for fetching and rendering the expenses according to filter. The component level chain: Expenses-> ExpensesList-> ExpenseItem.

## Screenshots


![Image-1](https://github.com/krupa2029/Expense-Tracker/blob/main/src/assets/images/Screenshot-1.png)
![Image-2](https://github.com/krupa2029/Expense-Tracker/blob/main/src/assets/images/Screenshot-2.png)
![Image-3](https://github.com/krupa2029/Expense-Tracker/blob/main/src/assets/images/Screenshot-3.png)


  
## Run

   ```bash 
   npm install
   npm start
   ```
