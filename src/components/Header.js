import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const HeaderStyles = styled.header`
  width: 100%;
  padding: 1em 40px;
  .links {
    display: flex;
    justify-content: center;
    .link {
      padding: 1em 1em;
      text-decoration: none;
      color: inherit;
      &:hover {
        color: purple;
      }
    }
  }
`;

export default function Header() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 250,
    config: config.molasses,
    onRest: () => set(!flip),
  })
  return (
    <HeaderStyles>
        <animated.h1 style={{...props, textAlign: 'center'}}>Vinyl Personal Library</animated.h1>
        <div className="links">
          <NavLink to="/" className="link" activeClassName="active" exact>
            <button>Vinyls List</button>
          </NavLink>
          <NavLink to="/add" className="link" activeClassName="active">
            <button>Add a vinyl</button>
          </NavLink>
        </div>
    </HeaderStyles>
  );
};
