import React from 'react';

const WeeklyWeatherItem = props => {

    const iconID = props.icon;
    const iconSource = `http://openweathermap.org/img/w/${iconID}.png`;

    return (
        <div>
            <p>Data: {props.date}</p>
            <p>Temperatura minimalna: {props.mintemp}</p>
            <p>Temperatura maksymalna: {props.maxtemp}</p>
            <img src={iconSource} className="weather-icon" alt="Weather Icon" />
        </div>
    );
}

export default WeeklyWeatherItem;