import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddVinyl from '../components/AddVinyl';
import VinylsList from '../components/VinylsList';
import Deck from '../components/Deck';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route component={VinylsList} path="/" exact={true} />
            <Route component={AddVinyl} path="/add" />
            <Route component={Deck} path="/deck" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
