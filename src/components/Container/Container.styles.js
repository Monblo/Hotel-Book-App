import styled from 'styled-components';

export const ContainerStyled = styled.div`
  background-color: ${({isGrey}) => isGrey ? ({theme}) => theme.colors.background : ({theme}) => theme.colors.basic};
  padding: 2rem 0;
    `;