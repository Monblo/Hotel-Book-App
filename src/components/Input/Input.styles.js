import styled from "styled-components";

export const InputStyled = styled.input`
  width: ${({width}) => width};
  padding: .7rem;

  ${({theme}) => theme.media.mobile} {
    max-width: 10rem;
  }
  
  ${({theme}) => theme.media.tablet} {
    max-width: 12rem;
  }
    `;

