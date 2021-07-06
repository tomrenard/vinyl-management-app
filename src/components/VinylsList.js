import React from 'react';

export default function VinylsList(props) {
  const vinyls = props.vinyls;
  const isBusy = props.isBusy;
  vinyls && console.log(vinyls.vinyls);
  return (
    <>
    { !isBusy && vinyls && vinyls.vinyls.map((vinyl, index) => (
      <>
        <h2>{vinyl.basic_information.artists_sort}</h2>
        <img src={vinyl.basic_information.huge_thumb} alt="" />
      </>
    ))}
    </>
  );
};
