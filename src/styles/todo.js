import styled from "styled-components";

export const TodoContaier = styled.div`
  margin-left: 2rem;
`;

export const TodoList = styled.ul``;

export const TodoItem = styled.li`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  &:after {
    display: block;
    background: #114f78;
    width: 80%;
    height: 2px;
    content: "";
    position: absolute;
    bottom: -10%;
  }
`;

export const Work = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Time = styled.span`
  font-size: 1rem;
`;
