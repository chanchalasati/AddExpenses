import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    //conditional rendring
    const filteredData = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return (
        <div className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredData} />
            <ExpensesList items={filteredData} />
        </div>
    );
}

export default Expenses;