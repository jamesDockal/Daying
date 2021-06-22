import React from "react";
import { CircleContainer } from "../styles/circle";

export default function Circle({ size, color }) {
  return <CircleContainer color={color} size={size} />;
}
