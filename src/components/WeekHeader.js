import React from "react";
import { WeekHeaderContainer, DateWrapper } from "../styles/weekheader";
import { lastDayOfISOWeek, startOfISOWeek, format } from "date-fns";

export default function WeekHeader() {
  const firstDay = format(startOfISOWeek(new Date()), "dd/LL");
  const lastDay = format(lastDayOfISOWeek(new Date()), "dd/LL");

  return (
    <WeekHeaderContainer>
      {firstDay} - {lastDay}
    </WeekHeaderContainer>
  );
}
