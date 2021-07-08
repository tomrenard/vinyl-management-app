import React from 'react';
import VinylForm from './VinylForm';
import styled from 'styled-components';

const SectionAddVinylStyles = styled.section`
  margin-top: 5em;
  padding: 0px 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  .form-container {
    width: 100%;
    max-width: 400px;
  }
`;

const AddVinyl = ({ history, vinyls, setVinyls, vinylsDiscogs, setVinylsDiscogs }) => {
  const handleOnSubmit = (vinyl) => {
    setVinyls([...vinyls, vinyl]);
    history.push('/');
  };

  return (
    <SectionAddVinylStyles>
      <div className="form-container">
        <VinylForm handleOnSubmit={handleOnSubmit} />
      </div>
    </SectionAddVinylStyles>
  );
};

export default AddVinyl;
