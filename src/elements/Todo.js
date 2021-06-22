import React, { useState } from "react";
import {
  TodoContaier,
  TodoList,
  TodoItem,
  Work,
  Time,
  Labor,
} from "../styles/todo";
import Circle from "../elements/Circle";

import Details from "../components/Details";

import { shade } from "polished";

export default function Todo({ data, display }) {
  const [information, setInformation] = useState(
    data.map((work, index) => {
      return {
        details: work.toDo.details,
        display: true,
      };
    })
  );

  const handleClick = (asd) => {
    const data = [ ...information ]
    data[asd].display = !data[asd].display 
  
    setInformation(data)
  };

  return (
    <TodoContaier style={{ display: display ? "block" : "none" }}>
      <ul>
        {data.map((work, index) => {
          return (
            <>
              <TodoItem key={index}>
                <Circle
                  onClick={() => handleClick(index)}
                  color={shade("0.1", "#114F78")}
                  size={16}
                />
                <Work>
                  <Labor>{work.toDo.labor}</Labor>
                  <Time>
                    {work.toDo.time.from} - {work.toDo.time.until}
                  </Time>
                </Work>
              </TodoItem>
              {work.toDo.details && (
                <Details display={information[index].display} labor={work.toDo.details} />
              )}
            </>
          );
        })}
      </ul>
    </TodoContaier>
  );
}
