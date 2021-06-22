import React, { useState } from "react";
import { TodayContainer, Tittle, Day } from "../styles/today";

import Todo from "../elements/Todo";

import { GiHamburgerMenu } from "react-icons/gi";

import fakedDb from "../fake-db.json";

export default function Today() {
  const [isdisplayed, setIsdisplayed] = useState(true);
  console.log(isdisplayed);
  return (
    <TodayContainer>
      <Tittle>
        <GiHamburgerMenu
          onClick={() => setIsdisplayed(!isdisplayed)}
          style={{ cursor: "pointer", color: "#114F78", fontSize: "3rem" }}
        />
        <Day>Today</Day>
      </Tittle>

      <Todo display={isdisplayed} data={fakedDb.today} />
    </TodayContainer>
  );
}
