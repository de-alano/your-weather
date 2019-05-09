import React from 'react';

const WeeklyWeatherItem = props => {
    return (
        <div>
            <p>Data: {props.date}</p>
            <p>Temperatura minimalna: {props.mintemp}</p>
            <p>Temperatura maksymalna: {props.maxtemp}</p>
            <p>{props.icon}</p>
        </div>
    );
}

export default WeeklyWeatherItem;