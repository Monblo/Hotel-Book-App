import styled from "styled-components";

export const PStyled = styled.p`
  font-family: Ubuntu, sans-serif; 
  font-weight: ${({theme}) => theme.font.regular};
  font-size: 1rem;
  color: ${({color}) => color ? color : ({theme}) => theme.colors.basic};
  line-height: 1.875;
  text-align: ${({align}) => align ? align : 'center' };
 
  ${({theme}) => theme.media.mobile} {
    text-align: center;
  }

  ${({theme}) => theme.media.tablet} {
    text-align: center;
  }
  `;