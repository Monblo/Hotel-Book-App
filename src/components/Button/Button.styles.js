import styled from 'styled-components';

export const ButtonStyled = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: .7rem 0;
    margin-left: 1rem;
    width: 7.5rem;
    background: transparent;
    color: ${({theme}) => theme.colors.basic};
    border: 2px solid ${({theme}) => theme.colors.basic};
  `;
