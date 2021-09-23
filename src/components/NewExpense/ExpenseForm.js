import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //Note: Other way to write multiple state using only one State:

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        //Note: passing object: 1)Paste old value of all elements(So, we don't lost other elements), 2) Override perticular element(enteredTitle)

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // Another(Right) Approach:
        // setUserInput((prevState)=>{
        //     return{
        //         ...prevState,
        //         enteredTitle: event.target.value;
        //     }
        // });
    };


    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // console.log(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // console.log(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    };

    const submitHandler = (event) => {
        //Note: prevent default browser behaviour: Does Not send Request automatically => Page will not be reloaded => Handle using js.
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        //Clear Form after Submit
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number'
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date'
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>

            <div className="new-expense__actions">
                <button tyep="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit" >Add Expense</button>
                
            </div>
        </form>);
};

export default ExpenseForm;