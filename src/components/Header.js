import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <h1>Vinyl Management App</h1>
        <div className="links">
          <NavLink to="/" className="link" activeClassName="active" exact>
            Vinyls List
          </NavLink>
          <NavLink to="/add" className="link" activeClassName="active">
            Add Vinyl
          </NavLink>
        </div>
      </div>
    </header>
  );
};
