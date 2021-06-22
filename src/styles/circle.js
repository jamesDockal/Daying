import styled from "styled-components";

export const CircleContainer = styled.div`
  background: ${(props) => props.color};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
`;
