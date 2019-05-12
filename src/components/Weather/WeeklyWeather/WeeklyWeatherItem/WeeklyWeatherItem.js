import React from 'react';
import { getWeatherIcon } from './../../../../utils/getWeatherIcon';
import { renderDayName } from '../../../../utils/renderDayName';
import './WeeklyWeatherItem.scss';

const WeeklyWeatherItem = props => {

    const iconID = props.icon;
    const minTemp = Math.round(props.mintemp);
    const maxTemp = Math.round(props.maxtemp);

    return (
        <div className="daily-weather">
            {renderDayName(props.date)}
            <img src={getWeatherIcon(iconID)} className="daily-weather__icon" alt="Weather Icon" />
            <div className="daily-weather__temp">
                <p className="daily-weather__temp-value daily-weather__temp-value--max">{maxTemp} &#176;</p>
                <p className="daily-weather__temp-value daily-weather__temp-value--min">{minTemp} &#176;</p>
            </div>
        </div>
    );
}

export default WeeklyWeatherItem;