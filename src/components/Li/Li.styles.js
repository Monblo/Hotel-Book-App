import styled from 'styled-components';

export const LiStyled = styled.li`
  font-family: Ubuntu, sans-serif;
  font-weight: ${({theme}) => theme.font.regular};
  font-size: 1rem;
  color: ${({theme}) => theme.colors.basic};
  line-height: 1.875;
  list-style-type: none;
  padding: ${({padding}) => padding};
    `;