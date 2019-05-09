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
    const weatherType = weather.weather[0].main;
    const weatherDescription = weather.weather[0].description;
    const iconID = weather.weather[0].icon;


    return (
        <div className="weather-current">
            <h1>Aktualna pogoda</h1>
            <p>{city}</p>
            <p>Czas: {time}</p>
            <p>Ciśnienie: {pressure}</p>
            <p>Wilgotność: {humidity}</p>
            <p>Temperatura maksymalna: {maxTemp}</p>
            <p>Temperatura minimalna: {minTemp}</p>
            <p>{weatherType}</p>
            <p>{weatherDescription}</p>
            <img src={getWeatherIcon(iconID)} className="weather-icon" alt="Weather Icon" />
        </div>
    );
}

export default CurrentWeather;