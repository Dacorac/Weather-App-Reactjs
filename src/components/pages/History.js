import React, { useContext } from 'react';

import Error from "./../shared/Error";
import HistoryCard from "./../shared/HistoryCard";

import { Context } from "../../store/Store";

const History = () => {
    
    const [state, dispatch] = useContext(Context);
    const { searchedCities } = state;

    return ( 
        <div className="col-12">
            <p className="history__content-title">Búsquedas recientes</p>

            { searchedCities.length > 0 ?
                <div className="history-card">
                    {searchedCities.map((item, i) => (
                        <HistoryCard item={item} collapse={item === searchedCities[i]} key={i} />
                    ))}
                </div> : <Error message="No hay resultados" /> }
        </div>
    );
}
 
export default History;