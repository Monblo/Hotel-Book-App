import styled from "styled-components";

export const PStyled = styled.p`
  max-width: ${({underImg}) => underImg ? '30.125rem' : '20.625rem'};
  font-family: Ubuntu, sans-serif;
  font-weight: ${({theme}) => theme.font.regular};
  font-size: 1rem;
  color: ${({theme}) => theme.colors.basic};
  line-height: 1.875;
  text-align: ${({underImg}) => underImg ? 'left' : 'right'};
  padding: 0 1rem;
  `;