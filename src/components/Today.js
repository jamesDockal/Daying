import React from "react";
import { TodayContainer, Tittle } from "../styles/today";

import Circle from "../elements/Circle";
import Todo from "../elements/Todo";

import fakedDb from "../fake-db.json";

export default function Today() {
  return (
    <TodayContainer>
      <Tittle>
        <h1>Today</h1>
      </Tittle>

      <Todo data={fakedDb.today} />
    </TodayContainer>
  );
}
