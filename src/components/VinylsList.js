import React, { useEffect } from 'react';
import axios from 'axios';

export default function VinylsList() {
  useEffect(() => {
    axios.get(`https://api.discogs.com/database/search?q=Nirvana&token=WppZaBSUhugJNmSVcJQkxmUotfLfyeufVljGcpJv`)
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
