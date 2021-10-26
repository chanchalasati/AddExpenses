
import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    /*const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    });*/
    const amountChangeHandler = (event) => {
        /*setUserInput({
            ...userInput,
            title: event.target.value,
        });*/
        /* setUserInput((prevState) => {
             return { ...prevState, amount: event.target.value }
         })*/
        setAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        /*setUserInput({
            ...userInput,
            amount: event.target.value,
        });*/
        /*setUserInput((prevState) => {
            return { ...prevState, date: event.target.value }
        })*/
        setDate(event.target.value);
    }
    const titleChangeHandler = (event) => {
        /*setUserInput({
            ...userInput,
            date: event.target.value,
        });*/
        /*setUserInput((prevState) => {
            return { ...prevState, title: event.target.value }
        })*/
        setTitle(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();//on form submission browser reload the page automaticaly,for stoping this
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date),
        }

        props.onSaveExpenseData(expenseData);
        setAmount('');
        setDate('');
        setTitle('');
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'
                        value={title}
                        onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='Number'
                        min='0.01'
                        step='0.01'
                        value={Number(amount)}
                        onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date'
                        min='2019-01-12'
                        max='2022-12-31'
                        value={date}
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form >
    );
}

export default ExpenseForm;
