import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 0.625rem;

  ${({theme}) => theme.media.mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  ${({theme}) => theme.media.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
    `;
