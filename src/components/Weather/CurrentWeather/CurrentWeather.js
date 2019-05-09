import React from 'react';

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
    const icon = weather.weather[0].id;
    // const temperature = weather.temp.max;


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
            <p>{icon}</p>
        </div>
    );
}

export default CurrentWeather;