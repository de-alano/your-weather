import React from 'react';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import WeeklyWether from './WeeklyWeather/WeeklyWeather';
import './Weather.css';

const Weather = props => {
    return (
        <div className="weather">
            <CurrentWeather current={props.current} city={props.city} />
            <WeeklyWether weekly={props.weekly} />
        </div>
    );
}

export default Weather; 