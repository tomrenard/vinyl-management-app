import React from 'react';

export default function VinylsList(props) {
  const vinyls = props.vinyls;
  const isBusy = props.isBusy;
  vinyls && console.log(vinyls);
  return (
    <>
    { !isBusy && vinyls && vinyls.map(vinyl => (
      <h2>{vinyl.basic.basic_information.artists_sort}</h2>
    ))}
    </>
  );
};
