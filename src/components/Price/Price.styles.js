import styled from 'styled-components';
import {ImageStyled} from "../Image/Image.styles";

export const PriceStyled = styled.div`
  width: 6.25rem;
  height: 3.125rem;
  background-color: ${({theme}) => theme.colors.background};
  opacity: .85;
  color: ${({theme}) => theme.colors.basic};
  font-size: 1.25rem;
  font-family: Ubuntu, sans-serif;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  border-bottom-right-radius: 1.785rem;
  }
 `;