import styled from "styled-components";

export const TodoContaier = styled.div`
  margin-left: 2rem;
`;

export const TodoList = styled.ul``;

export const TodoItem = styled.li`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  &:after {
    display: block;
    background: black;
    width: 100%;
    height: 1px;
    content: "";
    position: absolute;
    bottom: -10%;
  }
`;

// content: '-',
//     width: 100px;
//     height: 5px;
//     color: black;
//     background-color: black;

export const Work = styled.div`
  font-size: 2rem;
`;
