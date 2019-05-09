import React from 'react';
import { getWeatherIcon } from './../../../utils/getWeatherIcon';

const CurrentWeather = props => {

    const city = props.city;

    const weather = props.current;
    const time = weather.dt;
    const pressure = weather.pressure;
    const humidity = weather.humidity;
    const maxTemp = weather.temp.max;
    const minTemp = weather.temp.min;
    const weatherDescription = weather.weather[0].description;
    const iconID = weather.weather[0].icon;


    return (
        <div className="current-weather">
            <p className="current-weather__location">{city}</p>
            <p className="current-weather__date">Czas: {time}</p>
            <p className="current-weather__pressure">Ciśnienie: {pressure}</p>
            <p className="current-weather__humidity">Wilgotność: {humidity}</p>
            <p className="current-weather__temp-max">Temperatura maksymalna: {maxTemp}</p>
            <p className="current-weather__temp-min">Temperatura minimalna: {minTemp}</p>
            <p className="current-weather__description">{weatherDescription}</p>
            <img src={getWeatherIcon(iconID)} className="current-weather__icon" alt="Weather Icon" />
        </div>
    );
}

export default CurrentWeather;