import React from "react";

import { LeftbarContaier } from "../styles/leftbar";

import Today from "./Today";

export default function Leftbar() {
  return (
    <LeftbarContaier>
      <Today />
    </LeftbarContaier>
  );
}
