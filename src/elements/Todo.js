import React from "react";
import { TodoContaier, TodoList, TodoItem, Work } from "../styles/todo";
import Circle from "../elements/Circle";

import { shade } from "polished";

export default function Todo({ data, display }) {
  console.log("data", data);
  return (
    <TodoContaier style={{ display: display ? "block" : "none" }}>
      <TodoList>
        {data.map((work, index) => (
          <TodoItem key={index}>
            <Circle color={shade("0.25", "#114F78")} size={16} />
            <Work>{work.todo}</Work>
          </TodoItem>
        ))}
      </TodoList>
    </TodoContaier>
  );
}
