import React from 'react';
import { getWeatherIcon } from './../../../../utils/getWeatherIcon';

const WeeklyWeatherItem = props => {

    const iconID = props.icon;

    return (
        <div>
            <p>Data: {props.date}</p>
            <p>Temperatura minimalna: {props.mintemp}</p>
            <p>Temperatura maksymalna: {props.maxtemp}</p>
            <img src={getWeatherIcon(iconID)} className="weather-icon" alt="Weather Icon" />
        </div>
    );
}

export default WeeklyWeatherItem;