import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

function Header() {
  return (
    <HeaderWrapper>
      <h1>AluraFlix</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/upload">Upload Video</Link>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;
