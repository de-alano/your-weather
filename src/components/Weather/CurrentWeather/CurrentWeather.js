import React from 'react';
import { getWeatherIcon } from './../../../utils/getWeatherIcon';
import './CurrentWeather.scss';
import { ReactComponent as LocationIcon } from './../../../images/location.svg';
import { ReactComponent as TimeIcon } from './../../../images/date.svg';
import { ReactComponent as WindIcon } from './../../../images/wind.svg';
import { ReactComponent as PressureIcon } from './../../../images/pressure.svg';
import { ReactComponent as HumidityIcon } from './../../../images/humidity.svg';
import { ReactComponent as CloudinessIcon } from './../../../images/cloudiness.svg';

const CurrentWeather = props => {

    const city = props.city;
    const date = new Date().toLocaleDateString();

    const weather = props.current;
    const maxTemp = Math.round(weather.temp.max);
    const iconID = weather.weather[0].icon;
    const weatherDescription = weather.weather[0].description;

    const wind = Math.round(weather.speed * 3.6);
    const pressure = Math.round(weather.pressure);
    const humidity = weather.humidity;
    const cloudiness = weather.clouds;


    return (
        <div className="current-weather">
            <div className="current-weather__main">
                <div className="current-weather__location">
                    <div className="current-weather__location__icon">
                        <LocationIcon />
                    </div>
                    <p className="current-weather__location__info">{city}</p>
                </div>

                <div className="current-weather__date">
                    <div className="current-weather__date__icon">
                        <TimeIcon />
                    </div>
                    <p className="current-weather__date__info">{date}</p>
                </div>

            </div>

            <div className="current-weather-container">
                <div className="current-weather__info">
                    <img src={getWeatherIcon(iconID)} className="current-weather__icon" alt="Weather Icon" />
                    <p className="current-weather__description">{weatherDescription}</p>
                    <p className="current-weather__temp-max">{maxTemp} &#176;</p>
                </div>

                <div className="current-weather__details">
                    <div className="current-weather__wind">
                        <div className="current-weather__wind__icon">
                            <WindIcon />
                        </div>
                        <p className="current-weather__wind__name">Wind</p>
                        <p className="current-weather__wind__info">{wind} km/h</p>
                    </div>
                    <div className="current-weather__pressure">
                        <div className="current-weather__pressure__icon">
                            <PressureIcon />
                        </div>
                        <p className="current-weather__pressure__name">Pressure</p>
                        <p className="current-weather__pressure__info">{pressure} hPa</p>
                    </div>
                    <div className="current-weather__humidity">
                        <div className="current-weather__humidity__icon">
                            <HumidityIcon />
                        </div>
                        <p className="current-weather__humidity__name">Humidity</p>
                        <p className="current-weather__humidity__info">{humidity} %</p>
                    </div>
                    <div className="current-weather__cloudiness">
                        <div className="current-weather__cloudiness__icon">
                            <CloudinessIcon />
                        </div>
                        <p className="current-weather__cloudiness__name">Cloudiness</p>
                        <p className="current-weather__cloudiness__info">{cloudiness} %</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;