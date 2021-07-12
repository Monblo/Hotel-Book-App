import styled from 'styled-components';

export const H1Styled = styled.h1`
  font-family: 'Lora', serif;
  font-size: 4rem;
  font-weight: ${({theme}) => theme.font.mid};
  text-shadow: 0 2px 2px rgba(0,0,0,.25);
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.name};
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;

  ${({theme}) => theme.media.mobile} {
    font-size: 2.5rem;
  }
  
  ${({theme}) => theme.media.tablet} {
    font-size: 3.5rem;
  }
  `;

export const H1BookingStyled = styled(H1Styled)`
  top: 0;
  left: 0;
  transform: none;
  position: relative;
  
  ${({theme}) => theme.media.mobile} {
    font-size: 2.5rem;
  }
  
  ${({theme}) => theme.media.tablet} {
    font-size: 3rem;
  }
`;