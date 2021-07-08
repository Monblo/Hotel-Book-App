import styled from 'styled-components';
import header from "../../images/header.jpg"

export const ImageContainerStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${header});
  background-position: center;
  background-size: cover;
  opacity: .8;
  position: relative;
  display: flex;
  justify-content: center;
`;