import React from 'react';
import WeeklyWeatherItem from './WeeklyWeatherItem/WeeklyWeatherItem';
import './WeeklyWeather.scss';

const WeeklyWeather = props => {

    const weeklyWeather = props.weekly.map((day, index) => (
        <WeeklyWeatherItem mintemp={day.temp.min} maxtemp={day.temp.max} icon={day.weather[0].icon} date={day.dt} key={index} />
    ));



    return (
        <div className="weekly-weather">
            {weeklyWeather}
        </div>
    );
}

export default WeeklyWeather;