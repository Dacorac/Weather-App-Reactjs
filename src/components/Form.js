import React, { useState } from 'react';

import Error from "./shared/Error";

const Form = ({ city, setCity, setSearch }) => {

    // Form state
    const [error, setError] = useState(false);

    const handleChange = e => {
        // Update state
        setCity(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (city.trim() === '') {
            setError(true);
            return;
        }

        setError(false);
        setSearch(true);
    }

    return (
        <div className="form__content">
            <label className="form__content-label">Búsqueda por ciudad:</label>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input 
                        className="form__content-input form-control" 
                        type="text"  
                        placeholder="Ciudad" aria-label="Ciudad" 
                        aria-describedby="button-addon2" 
                        value={city} 
                        onChange={handleChange}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
            { error 
                ? 
                <Error
                    message="Debe ingresar un valor para la búsqueda."
                />
                :
                null
            }
        </div>
    );
}

export default Form;