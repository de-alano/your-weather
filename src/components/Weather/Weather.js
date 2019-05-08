import React from 'react';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import WeeklyWether from './WeeklyWeather/WeeklyWeather';

const Weather = props => {
    return (
        <div className="weather">
            <div>{String(props.error)}</div>
            <CurrentWeather current={props.current} city={props.city} />
            <WeeklyWether weekly={props.weekly} />
        </div>
    );
}

export default Weather; 