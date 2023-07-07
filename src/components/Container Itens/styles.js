import styled from "styled-components";


export const ContainerItens = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.6) 0.01%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;
  padding: 50px 36px;
  display: flex;
  flex-direction: column;
  height: 100%;

  ${props => props.isBlur && `
  min-height: calc( 100vh - 170px);

backdrop-filter: blur(22.5px);
  `}
`;