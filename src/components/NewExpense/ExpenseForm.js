import React, {useState} from 'react';
import './ExpenseForm.css';
import './NewExpense.css';

const ExpenseForm = (props) => {

    //const [enterdTitle, setEnteredTitle] = useState('');
    //const [enteredAmount, setEnteredAmount] = useState('');
    //const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangedHandler = (event) => {
        // If you use this approach, React will guarantee
        // that the state snapshot it gives you here
        // in this inner function,
        // will always be the latest state snapshot,
        // keeping all scheduled state updates in mind.
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value};
        });
    };

    const amountChangeHandler = event => {
        //setEnteredAmount(event.target.value);
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value};
        });
    };

    const dateChangeHandler = event => {
        //setEnteredDate(event.target.value);
        setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value};
        });
    };

    const submitHandler = (event) => {
        // to prevent default page reload
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };

        setUserInput((prevState) => {
            return {...prevState, enteredTitle: 'Foo'};
        });

        props.onSaveExpenseData(expenseData);
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={userInput.enteredTitle} onChange={titleChangedHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={userInput.enteredAmount}  min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={userInput.enteredDate}  min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add expense</button>
        </div>
    </form>
}

export default ExpenseForm;