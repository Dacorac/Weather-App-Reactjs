import React from 'react';
import PropTypes from 'prop-types';

import { DAYS } from "./../../constants/constant";
import { MONTHS } from "./../../constants/constant";
import { KELVIN } from "./../../constants/constant";

const Card = ({ forecast, position }) => {

    const { temp, weather } = forecast;

    const imgURL = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    const currentDate = new Date();
    const newDate = new Date(currentDate.setDate(currentDate.getDate() + position));
    const date = DAYS[newDate.getDay()] + ' ' + newDate.getDate().toString() + ' ' + MONTHS[newDate.getMonth()];

    return (
        <div className="forecast-card__content">
            <p className={"forecast-card__content-title " + (position === 0 && "active")}>{date}</p>
          
            <div className="forecast-card__content-image">
                <img src={imgURL} alt={weather[0].icon} />
            </div>

            <div className="forecast-card__content-info">
                <span className="temp text-center">{(temp.day - KELVIN).toFixed(1)}°C</span>
                {weather.map((item, i) => (<span key={i}>{item.description.charAt(0).toUpperCase() + item.description.slice(1)}</span>))}
            </div>
            
        </div>
    );
}
 
Card.propTypes = {
    forecast: PropTypes.object,
    position: PropTypes.number
};

export default Card;