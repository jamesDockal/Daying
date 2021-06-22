import React from "react";
import { TodoContaier, TodoList, TodoItem, Work, Time } from "../styles/todo";
import Circle from "../elements/Circle";

import { shade } from "polished";

export default function Todo({ data, display }) {
  return (
    <TodoContaier style={{ display: display ? "block" : "none" }}>
      <TodoList>
        {data.map((work, index) => (
          <TodoItem key={index}>
            <Circle color={shade("0.1", "#114F78")} size={16} />
            <Work>
              {work.toDo.labor}
              <Time>
                {work.toDo.time.from} - {work.toDo.time.until}
              </Time>
            </Work>
          </TodoItem>
        ))}
      </TodoList>
    </TodoContaier>
  );
}
