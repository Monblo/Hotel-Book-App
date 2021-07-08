import styled from 'styled-components';

export const ContainerStyled = styled.div`
    background-color: ${({isGrey}) => isGrey ? '#C4C4C4' : '#fff'};
    `;