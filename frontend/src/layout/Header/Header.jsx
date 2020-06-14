import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  color: ${props => props.color || 'black'};
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

// Ugly, but hey it keeps everything else neat 🤷🏻‍♂️
const Header = ({ title, h1, h2, h3, serif, sans, left, center, color }) => {
  const className = serif ? 'serif' : 'sans';
  return (
    <HeaderContainer
      serif={serif}
      sans={sans}
      left={left}
      center={center}
      color={color}
    >
      {h1 ? (
        <h1 className={className}>{title}</h1>
      ) : h2 ? (
        <h2 className={className}>{title}</h2>
      ) : (
        <h3 className={className}>{title}</h3>
      )}
    </HeaderContainer>
  );
};

export default Header;
