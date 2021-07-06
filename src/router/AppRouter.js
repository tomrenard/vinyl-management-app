import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddVinyl from '../components/AddVinyl';
import VinylsList from '../components/VinylsList';
import Deck from '../components/Deck';
import axios from 'axios';



export default function AppRouter() {
  const [appState, setAppState] = useState({
    vinyls: null,
  });
  useEffect(() => {
    fetch("https://api.discogs.com/users/.Apres/collection", {
    headers: { "Authorization": "Discogs token=sAhKoWnryWGckfYwFIoercYLLrOJHKWBmQUqxhFZ" }
  })
      .then((res) => res.json())
      .then((vinyls) => {
        setAppState({ vinyls: vinyls.releases });
      });
  }, [setAppState]);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route render={(props) => (
              <VinylsList {...props} vinyls={appState} setVinyls={setAppState} /> )} path="/" exact={true}
            />
            <Route component={AddVinyl} path="/add" />
            <Route component={Deck} path="/deck" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
