import styled from 'styled-components';

export const ContainerStyled = styled.div`
  background-color: ${({color}) => color ? color : ({theme}) => theme.colors.basic};
  padding: 4rem 0;
  display: ${({flex}) => flex};
  justify-content: ${({justify}) => justify};
  align-items: ${({align}) => align};
    `;