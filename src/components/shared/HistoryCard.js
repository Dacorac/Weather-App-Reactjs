import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from "react-bootstrap";
import HistoryReducer from '../../reducers/HistoryReducer';

const HistoryCard = ({ item, collapse }) => {

    const [open, setOpen] = useState(!collapse);

    const imageComponent = (item) => {
        const imgURL = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
        return (<img src={imgURL} />);
    }
    return ( 
        <div className="history-card__content">
            <h5 className="history-card__content-title">{item.name}</h5>

            <div className="history-card__content-image">
                {imageComponent(item)}
            </div>

            <div className="history-card__content-temp">
                <span className="badge badge-primary">{(item.main.temp).toFixed(1)}°C</span>
            </div>

            <a type="button" className="history-card__content-button" onClick={() => setOpen(!open)} aria-controls="collapse-content" aria-expanded={open}>
                {open ? 'Ver menos' : 'Ver más'}
            </a>

            <Collapse in={open}>
                <div id="collapse-content" className="history-card__content-collapse">
                    <span>{item.weather[0].description.charAt(0).toUpperCase() + item.weather[0].description.slice(1)}</span>
                    <span className="p-1">Humedad: {item.main.humidity}%</span>
                    <span className="p-1">Vientos: {item.wind.speed} m/s</span>
                </div>
            </Collapse>

        </div>
     );
}

HistoryReducer.propTypes = {
    item: PropTypes.object,
    collapse: PropTypes.bool
};
 
export default HistoryCard;