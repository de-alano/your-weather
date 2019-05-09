import React from 'react';
import { getWeatherIcon } from './../../../../utils/getWeatherIcon';
import { renderDayName } from '../../../../utils/renderDayName';

const WeeklyWeatherItem = props => {

    const iconID = props.icon;

    return (
        <div>
            {renderDayName(props.date)}
            <p>Temperatura minimalna: {props.mintemp}</p>
            <p>Temperatura maksymalna: {props.maxtemp}</p>
            <img src={getWeatherIcon(iconID)} className="weather-icon" alt="Weather Icon" />
        </div>
    );
}

export default WeeklyWeatherItem;