import React, { useEffect } from 'react';
import axios from 'axios';

export default function VinylsList(props) {
  const vinyls = props.vinyls;
  console.log(vinyls);
  return (
    <>
    {vinyls.map(vinyl => (
      <h2></h2>
    ))}
    </>
  );
};
