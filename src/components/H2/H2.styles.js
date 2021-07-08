import styled from 'styled-components';

export const H2Styled = styled.h2`
  font-family: Ubuntu, sans-serif;
  text-transform: uppercase;
  font-size: ${({isYellow}) => isYellow ? '2.625rem' : '2.25rem'};
  font-weight: ${({isYellow}) => isYellow ? 300 : 400};
  color: ${({isYellow}) => isYellow ? '#DAB42C' : '#6B6B6B'};
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  letter-spacing: ${({isYellow}) => isYellow ? '.5rem' : ''};
  position: ${({isYellow}) => isYellow ? 'absolute' : ''};
  top: ${({isYellow}) => isYellow ? '200px' : ''};
    `;