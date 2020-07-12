import React, { Fragment, useState, useEffect, useContext } from 'react';
import axios from 'axios';

import Form from "./../Form";
import CurrentWeather from "./../CurrentWeather";
import Error from "./../shared/Error";
import Card from "./../shared/Card";

import AddToHistory from "../../actions/Actions";
import { Context } from "../../store/Store";

const Home = () => {

    const [state, dispatch] = useContext(Context);

    const [city, setCity] = useState('');
    const [search, setSearch] = useState(false);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const appId = process.env.REACT_APP_API_KEY;

    useEffect(() => {

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${appId}`;

        const getWeather = async () => {
            if (search) {

                setCurrentWeather(null);
                setError(false);
                setIsLoading(true);

                console.log("Consultando API...");

                try {
                    const res = await axios.get(url);
                    setCurrentWeather(res.data);
                    dispatch(AddToHistory(res.data));
                } catch (error) {
                    setError(true);
                } finally {
                    setSearch(false);
                    setIsLoading(false);
                }
            }
        }
        getWeather();
    }, [search]);


    useEffect(() => {
        const getForecast = async () => {
            if (search && currentWeather) {
                setForecast(null);
                setError(false);
                setIsLoading(true);

                const lat = currentWeather.coord.lat;
                const lon = currentWeather.coord.lon;
                const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang={es}&appid=${appId}`;
                console.log("Consultando API...");

                try {
                    const res = await axios(url);

                    setForecast(res.data);
                } catch (error) {
                    setError(true);
                } finally {
                    setSearch(false);
                    setIsLoading(false);
                }

            }
        };
        getForecast();
    }, [currentWeather]);

    return (
        <Fragment>
            <div className="col-md-6 col-xs-12 p-4">
                <Form city={city} setCity={setCity} setSearch={setSearch} />
            </div>
            <div className="col-12 current-weather">
                {error && <Error message="No hay resultados" />}
                {isLoading && 'Cargando..'}
                {currentWeather && <CurrentWeather result={currentWeather} />}

            </div>

            {forecast &&
                <div className="col-12 forecast">
                    {forecast.daily.map((item, i) => (<Card key={i} forecast={item} position={i} />))}
                </div>
            }
        </Fragment>
    );
}

export default Home;