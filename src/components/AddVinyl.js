import React from 'react';
import VinylForm from './VinylForm';

const AddVinyl = ({ history, vinyls, setVinyls, vinylsDiscogs, setVinylsDiscogs }) => {
  const handleOnSubmit = (vinyl) => {
    setVinyls([...vinyls, vinyl]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <VinylForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddVinyl;
