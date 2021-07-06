import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddVinyl from '../components/AddVinyl';
import VinylsList from '../components/VinylsList';
import Deck from '../components/Deck';

export default function AppRouter() {
  const [appState, setAppState] = useState();
  const [isBusy, setBusy] = useState(true);
  useEffect(() => {
    async function FetchData() {
      fetch("https://api.discogs.com/users/.Apres/collection", {
        headers: { "Authorization": "Discogs token=sAhKoWnryWGckfYwFIoercYLLrOJHKWBmQUqxhFZ" }
      })
      .then((res) => res.json())
      .then((vinyls) => {
        setBusy(false);
        setAppState({ vinyls: vinyls.releases });
      });
    }
    FetchData();
    }, []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route render={(props) => (
              <VinylsList {...props} isBusy={isBusy} vinyls={appState} setVinyls={setAppState} /> )} path="/" exact={true}
            />
            <Route component={AddVinyl} path="/add" />
            <Route render={(props) => (
              <Deck {...props} isBusy={isBusy} vinyls={appState} setVinyls={setAppState} /> )} path="/deck" exact={true}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
