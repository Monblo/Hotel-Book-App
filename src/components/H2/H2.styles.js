import styled from 'styled-components';

export const H2Styled = styled.h2`
  font-family: Ubuntu, sans-serif;
  text-transform: uppercase;
  font-size: ${({size}) => size ? {size} : '2.25rem'};
  font-weight: ${({theme}) => theme.font.regular};
  color: ${({color}) => color};
  text-align: center;
    `;

export const H2YellowStyled = styled(H2Styled)`
  letter-spacing: .5rem;
  font-weight: ${({theme}) => theme.font.light};
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
`
