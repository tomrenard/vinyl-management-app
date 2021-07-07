import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddVinyl from '../components/AddVinyl';
import VinylsList from '../components/VinylsList';
import Deck from '../components/Deck';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';


export default function AppRouter() {
  const [vinyls, setVinyls] = useLocalStorage('vinyls', []);
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
          id: uuidv4(),
          title: vinyl.basic_information.title,
          artist: vinyl.basic_information.artists_sort,
          year: vinyl.basic_information.year,
          genre: vinyl.basic_information.genres[0],
          label: vinyl.basic_information.labels[0].name,
          cover: vinyl.basic_information.huge_thumb,
          date: new Date(),
        };
        vinylsArray.push(vinyl);
      });
      setVinyls(vinylsArray);
    };
    FetchData();
    }, []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
              <Route render={(props) => (
                <VinylsList {...props} vinyls={vinyls} setVinyls={setVinyls} /> )} path="/list"
              />
              <Route render={(props) => (
                <AddVinyl {...props} vinyls={vinyls} setVinyls={setVinyls} /> )} path="/add"
              />
              <Route render={(props) => (
                <Deck {...props} vinyls={vinyls} setVinyls={setVinyls} /> )} path="/" exact={true}
              />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
