import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
    const chartDatapointe = [
        { label: 'jan', value: 0 },
        { label: 'feb', value: 0 },
        { label: 'mar', value: 0 },
        { label: 'april', value: 0 },
        { label: 'May', value: 0 },
        { label: 'june', value: 0 },
        { label: 'july', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nv', value: 0 },
        { label: 'Dec', value: 0 },
    ]

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDatapointe[expenseMonth].value = expense.amount;
    }

    return (<Chart dataPoints={chartDatapointe} />);
}

export default ExpensesChart;