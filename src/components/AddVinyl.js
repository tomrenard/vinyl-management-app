import React from 'react';
import VinylForm from './VinylForm';

const AddVinyl = ({ history, vinyls, setVinyls }) => {
  const handleOnSubmit = (vinyl) => {
    setVinyls([vinyl, ...vinyls]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <VinylForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddVinyl;
