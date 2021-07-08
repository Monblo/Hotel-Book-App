import styled from "styled-components";

export const ArrowStyled = styled.div`
  font-size: 2.1875rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover{
    background-color: ${({theme}) => theme.colors.arrow};
  }
`;