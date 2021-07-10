import styled from 'styled-components';

export const ImageContainerStyled = styled.div`
  width: 100%;
  height: ${({height}) => height};
  background-image: url(${({url}) => url});
  background-position: center;
  background-size: cover;
  opacity: .8;
  position: relative;
`;