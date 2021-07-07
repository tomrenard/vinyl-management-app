import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddVinyl from '../components/AddVinyl';
import VinylsList from '../components/VinylsList';
import Deck from '../components/Deck';

export default function AppRouter() {
  const [appState, setAppState] = useState();
  useEffect(() => {
     async function FetchData() {
      const res = await fetch("https://api.discogs.com/users/.Apres/collection", {
        headers: { "Authorization": "Discogs token=sAhKoWnryWGckfYwFIoercYLLrOJHKWBmQUqxhFZ" }
      });
      const data = await res.json();
      const vinyls = data.releases;
      let vinylsArray = [];
      vinyls.forEach(vinyl => {
        vinyl = {
          title: vinyl.basic_information.title,
          artist: vinyl.basic_information.artists_sort,
          year: vinyl.basic_information.year,
          genre: vinyl.basic_information.genres[0],
          label: vinyl.basic_information.labels[0].name,
          cover: vinyl.basic_information.huge_thumb,
        };
        vinylsArray.push(vinyl);
      });
      setAppState(vinylsArray);
    };
    FetchData();
    }, []);
  console.log(appState);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route render={(props) => (
              <VinylsList {...props} vinyls={appState} setVinyls={setAppState} /> )} path="/list" exact={true}
            />
            <Route component={AddVinyl} path="/add" />
            <Route render={(props) => (
              <Deck {...props} vinyls={appState} setVinyls={setAppState} /> )} path="/" exact={true}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
