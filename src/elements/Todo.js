import React from "react";
import { TodoContaier, TodoList, TodoItem } from "../styles/todo";
import Circle from "../elements/Circle";

export default function Todo({ data }) {
  console.log("data", data);
  return (
    <TodoContaier>
      <TodoList>
        {data.map((work) => (
          <TodoItem>
            <Circle size={16} />
            <span>{work.todo}</span>
          </TodoItem>
        ))}
      </TodoList>
    </TodoContaier>
  );
}
