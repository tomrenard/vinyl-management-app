import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddVinyl from '../components/AddVinyl';
import VinylsList from '../components/VinylsList';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route component={VinylsList} path="/" exact={true} />
            <Route component={AddVinyl} path="/add" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
