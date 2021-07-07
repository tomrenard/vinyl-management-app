import React from 'react';
import VinylForm from './VinylForm';

const AddVinyl = ({ history, vinyls, setVinyls, vinylsDiscogs, setVinylsDiscogs }) => {
  const handleOnSubmit = (vinyl) => {
    setVinyls([...vinyls, vinyl]);
    history.push('/');
  };

  return (
    <div className="form-container">
      <VinylForm handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default AddVinyl;
