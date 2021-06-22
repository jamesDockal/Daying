import styled from "styled-components";

export const CircleContainer = styled.div`
  background: #2c5784;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
`;
