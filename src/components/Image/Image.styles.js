import styled from 'styled-components';

export const ImageStyled = styled.img`
  max-width:100%;
  max-height: 100%;
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, .25);
  margin: 0 auto;
    `;

export const ImageCarouselStyled = styled(ImageStyled)`
  max-width: 40%;
  
  ${({theme}) => theme.media.mobile} {
    max-width: 100%;
  }
  
  ${({theme}) => theme.media.tablet} {
    max-width: 100%;
  }
`