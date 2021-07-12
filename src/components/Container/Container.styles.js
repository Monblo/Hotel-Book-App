import styled from 'styled-components';

export const ContainerStyled = styled.div`
  background-color: ${({color}) => color ? color : ({theme}) => theme.colors.basic};
  padding: 4rem 0;
  display: ${({flex}) => flex};
  justify-content: ${({justify}) => justify};
  align-items: ${({align}) => align};

  ${({theme}) => theme.media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 1rem;
  }

  ${({theme}) => theme.media.tablet} {
    padding: 3rem;
  }
    `;

export const ContainerFooterStyled = styled(ContainerStyled)`
  ${({theme}) => theme.media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  `;


