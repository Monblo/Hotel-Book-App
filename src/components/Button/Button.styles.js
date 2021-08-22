import styled from 'styled-components';

export const ButtonStyled = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: .7rem 0;
    margin-left: 1rem;
    width: 7.5rem;
    height: 100%;
    background: transparent;
    color: ${({theme}) => theme.colors.background};
    border: 2px solid ${({theme}) => theme.colors.basic};
  `;

export const ButtonFormStyled = styled(ButtonStyled)`
  color: ${({theme}) => theme.colors.dark};
  border: 2px solid ${({theme}) => theme.colors.dark};
  margin: 0;
  cursor: pointer;

  ${({theme}) => theme.media.mobile} {
    margin-top: 1.5rem
  }
  
  ${({theme}) => theme.media.tablet} {
    margin-top: 1.5rem
  }
`;


