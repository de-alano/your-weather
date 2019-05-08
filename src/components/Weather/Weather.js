import React from 'react';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import WeeklyWether from './WeeklyWeather/WeeklyWeather';

const Weather = () => {
    return (
        <div className="weather">
            <CurrentWeather />
            <WeeklyWether />
        </div>
    );
}

export default Weather; 