import React from 'react';

const CurrentWeather = props => {

    const city = props.city;

    const weather = props.current;
    const time = weather.dt;
    // const temperature = weather.temp.max;


    return (
        <div className="weather-current">
            <p>{city}</p>
            <p>Czas: {time}</p>
        </div>
    );
}

export default CurrentWeather;