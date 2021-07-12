import styled from 'styled-components';

export const TextContainerStyled = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;

  ${({theme}) => theme.media.mobile} {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  ${({theme}) => theme.media.tablet} {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
    `;