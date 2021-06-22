import React, { useState } from "react";
import { TodayContainer, Tittle, Day, hamburgerStyle } from "../styles/today";

import Todo from "../elements/Todo";

import { GiHamburgerMenu } from "react-icons/gi";

import fakedDb from "../fake-db.json";

export default function Today() {
  const [isdisplayed, setIsdisplayed] = useState(true);

  return (
    <TodayContainer>
      <Tittle>
        <GiHamburgerMenu
          onClick={() => setIsdisplayed(!isdisplayed)}
          style={hamburgerStyle(isdisplayed)}
        />
        <Day>Today</Day>
      </Tittle>

      <Todo display={isdisplayed} data={fakedDb.today} />
    </TodayContainer>
  );
}
