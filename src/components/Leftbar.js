import React from "react";

import { LeftbarContaier } from "../styles/leftbar";

import Today from "./Today";
import WeekHeader from "./WeekHeader";

export default function Leftbar() {
  return (
    <LeftbarContaier>
      <WeekHeader />
      <Today />
    </LeftbarContaier>
  );
}
