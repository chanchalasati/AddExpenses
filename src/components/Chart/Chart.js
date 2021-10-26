
import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    console.log(props.dataPoints);
    const dataPonitsValues = props.dataPoints.map((datapoint) => datapoint.value);
    const totalMaximum = Math.max(...dataPonitsValues);
    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
}

export default Chart;