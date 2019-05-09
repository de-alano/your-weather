import React from 'react';
import { getWeatherIcon } from './../../../../utils/getWeatherIcon';
import { renderDayName } from '../../../../utils/renderDayName';

const WeeklyWeatherItem = props => {

    const iconID = props.icon;

    return (
        <div className="daily-weather">
            {renderDayName(props.date)}
            <p className="daily-weather__temp-min">Temperatura minimalna: {props.mintemp}</p>
            <p className="daily-weather__temp-max">Temperatura maksymalna: {props.maxtemp}</p>
            <img src={getWeatherIcon(iconID)} className="daily-weather__icon" alt="Weather Icon" />
        </div>
    );
}

export default WeeklyWeatherItem;