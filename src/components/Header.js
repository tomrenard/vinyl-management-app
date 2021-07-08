import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  width: 100%;
  max-width: 1200px;
  padding: 1em 40px;
  .links {
    display: flex;
    justify-content: center;
    .link {
      padding: 0 1em;
      text-decoration: none;
      color: inherit;
      &:hover {
        color: purple;
      }
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
        <h1 style={{ textAlign: 'center' }}>Vinyls Personal Library</h1>
        <div className="links">
          <NavLink to="/" className="link" activeClassName="active" exact>
            Vinyls List
          </NavLink>
          <NavLink to="/add" className="link" activeClassName="active">
            Add Vinyl
          </NavLink>
        </div>
    </HeaderStyles>
  );
};
