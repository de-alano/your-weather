import React from 'react';
import { getWeatherIcon } from './../../../utils/getWeatherIcon';
import './CurrentWeather.scss';
import { ReactComponent as Location } from './../../../images/location.svg';
import { ReactComponent as Time } from './../../../images/date.svg';
import { ReactComponent as Wind } from './../../../images/wind.svg';
import { ReactComponent as Pressure } from './../../../images/pressure.svg';
import { ReactComponent as Humidity } from './../../../images/humidity.svg';
import { ReactComponent as Cloudiness } from './../../../images/cloudiness.svg';

const CurrentWeather = props => {

    const city = props.city;
    const date = new Date().toLocaleDateString();

    const weather = props.current;
    const maxTemp = Math.floor(weather.temp.max);
    const iconID = weather.weather[0].icon;
    const weatherDescription = weather.weather[0].description;

    const wind = weather.speed;
    const pressure = weather.pressure;
    const humidity = weather.humidity;
    const cloudiness = weather.clouds;







    return (
        <div className="current-weather">
            <div className="current-weather__main">
                <div className="current-weather__location">
                    <div className="current-weather__location__icon">
                        <Location />
                    </div>
                    <p className="current-weather__location__info">{city}</p>
                </div>

                <div className="current-weather__date">
                    <div className="current-weater__date__icon">
                        <Time />
                    </div>
                    <p className="current-weather__date__info">{date}</p>
                </div>

            </div>

            <div className="current-weather-container">
                <div className="current-weather__info">
                    <img src={getWeatherIcon(iconID)} className="current-weather__icon" alt="Weather Icon" />
                    <p className="current-weather__temp-max">{maxTemp} &#8451;</p>
                    <p className="current-weather__description">{weatherDescription}</p>
                </div>

                <div className="current-weather__details">
                    <div className="current-weather__wind">
                        <div className="current-weather__wind__icon">
                            <Wind />
                        </div>
                        <p className="current-weather__wind__info">{wind} m/s</p>
                    </div>
                    <div className="current-weather__pressure">
                        <div className="current-weather__pressure__icon">
                            <Pressure />
                        </div>
                        <p className="current-weather__pressure__info">{pressure} hPa</p>
                    </div>
                    <div className="current-weather__humidity">
                        <div className="current-weather__humidity__icon">
                            <Humidity />
                        </div>
                        <p className="current-weather__humidity__info">{humidity} %</p>
                    </div>
                    <div className="current-weather__cloudiness">
                        <div className="current-weather__cloudiness__icon">
                            <Cloudiness />
                        </div>
                        <p className="current-weather__cloudiness__info">{cloudiness} %</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;