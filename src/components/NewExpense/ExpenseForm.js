import React, {useState} from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {

    //**1 way
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredNumber, setEnteredNumber] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    //**2 way
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredNumber: '',
        enteredDate: '',
    });


    const titleChangeHandler = (event) => {
        //--1 way **1 way
        // setEnteredTitle(event.target.value);

        //--2 way **2 way
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        //--3 way **2 way
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value};
        });
    }

    const numberChangeHandler = (event) => {
        //--1 way **1 way
        // setEnteredNumber(event.target.value);

        //--2 way **2 way
        // setUserInput({
        //     ...userInput,
        //     enteredNumber: event.target.value,
        // });

        //--3 way **2 way
        setUserInput((prevState) => {
            return {...prevState, enteredNumber: event.target.value};
        });
    }

    const dateChangeHandler = (event) => {
        //--1 way **1 way
        // setEnteredDate(event.target.value);

        //--2 way **2 way
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });

        //--3 way **2 way
        setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value};
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            price: userInput.enteredNumber,
            date: new Date(userInput.enteredDate),
            id: Math.random.toString()
        };

        props.onFormSubmitted(expenseData);
        props.toggleFormShown();

        setUserInput({
            enteredTitle: '',
            enteredNumber: '',
            enteredDate: '',
        });

    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={userInput.enteredNumber} onChange={numberChangeHandler} min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="date" value={userInput.enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2021-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.toggleFormShown}>Cancel</button>
                <button type="submit">Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;