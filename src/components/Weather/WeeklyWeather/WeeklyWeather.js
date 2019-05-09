import React from 'react';
import WeeklyWeatherItem from './WeeklyWeatherItem/WeeklyWeatherItem';

const WeeklyWeather = props => {

    const weeklyWeather = props.weekly.map((day, index) => (
        <WeeklyWeatherItem mintemp={day.temp.min} maxtemp={day.temp.max} icon={day.weather[0].id} date={day.dt} key={index} />
    ));



    return (
        <div className="weather-weekly">
            Pogoda na najbliższy tydzień
            {weeklyWeather}
        </div>
    );
}

export default WeeklyWeather;