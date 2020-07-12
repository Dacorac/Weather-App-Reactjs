import React from 'react';
import PropTypes from 'prop-types';

const CurrentWeather = ({result}) => {

    const { name, weather, main, wind } = result;

    const imgURL = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return ( 
        <div className="weather-card">
            <h4 className="weather-card__content-title">
                {name}
            </h4>
            <div className="weather-card__content-image">
                <img src={imgURL} alt={weather[0].main} />
            </div>
            <div className="weather-card__content-info">
                {weather.map((item, key) => (
                    <span className="description p-2" key={key}>{item.description.charAt(0).toUpperCase() + item.description.slice(1)}</span>
                ))} 
                <span className="badge badge-primary p-1">{main.temp.toFixed(1)}°C</span>
                <span className="p-2">Humedad: {main.humidity}%</span>
                <span> | </span>
                <span className="p-2">Vientos: {wind.speed} m/s</span>
            </div>
        </div>
    );
}

CurrentWeather.propTypes = {
    result: PropTypes.object
};
 
export default CurrentWeather;