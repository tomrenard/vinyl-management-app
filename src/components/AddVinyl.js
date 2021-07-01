import React from 'react';
import VinylForm from './VinylForm';

export default function AddVinyl() {
  const handleOnSubmit = (vinyl) => {
    console.log(vinyl);
  };

  return (
    <>
      <VinylForm handleOnSubmit={handleOnSubmit}></VinylForm>
    </>
  );
}
