import styled from "styled-components";

export const DetailsContainer = styled.div`
  margin: 1rem 0 0 2rem;
  font-size: 1.2rem;
  display: ${(props) => props.display ? "none" : "block"};
`;
