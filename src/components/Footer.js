import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default function Footer() {
  return(
    <FooterStyles>
      <p style={{ position: 'fixed', bottom: '0', fontWeight: '100', fontSize: '0.8em' }}className='center'>&copy; Tom Renard {new Date().getFullYear()}</p>
    </FooterStyles>
  );
}
