import React from 'react';
import Deck from './Deck';
import styled from 'styled-components';

const SectionVinylListStyles = styled.section`
  margin-top: 8em;
  padding: 0px 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default function VinylsList({ vinyls }) {
  return (
    <SectionVinylListStyles>
      <Deck vinyls={vinyls} />
    </SectionVinylListStyles>
  );
};
