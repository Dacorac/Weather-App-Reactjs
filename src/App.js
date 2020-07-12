import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Store from "./store/Store";
import Home from "./components/pages/Home";
import History from "./components/pages/History";
import Navigation from "./components/shared/Nav";
import './App.css';


function App() {
  return (
    <Store>
      <BrowserRouter>
        <Fragment>
          <Navigation
            title="Weather App"
          />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/busquedas-recientes" component={History} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </Store>
  );
}

export default App;
