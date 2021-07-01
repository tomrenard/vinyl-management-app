import React, { useEffect } from 'react';
import axios from 'axios';

export default function VinylsList() {
  useEffect(() => {
    axios.get("https://api.discogs.com/users/.Apres/collection", {
      headers: {
        "Authorization": "Discogs token=sAhKoWnryWGckfYwFIoercYLLrOJHKWBmQUqxhFZ"
      }
    })
      .then(res =>{
        const data = res.data;
        console.log(data);
      })
      .catch(err => console.log(err));
  });
  return (
    <h2>List of vinyls</h2>
  );
};
