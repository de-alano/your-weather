import React from 'react';
import WeeklyWeatherItem from './WeeklyWeatherItem/WeeklyWeatherItem';

const WeeklyWeather = () => {
    return (
        <div className="weather-weekly">
            Pogoda na najbliższy tydzień
            <WeeklyWeatherItem />
            <WeeklyWeatherItem />
            <WeeklyWeatherItem />
        </div>
    );
}

export default WeeklyWeather;