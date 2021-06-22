import React from "react";
import { DetailsContainer } from "../styles/details";

export default function Details({ labor, display }) {
  console.log("display", display);
  return <DetailsContainer display={display}>{labor}</DetailsContainer>;
}
