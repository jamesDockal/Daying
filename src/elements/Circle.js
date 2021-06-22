import React from "react";
import { CircleContainer } from "../styles/circle";

export default function Circle({ size, color, onClick }) {
  return (
    <CircleContainer onClick={() => onClick()} color={color} size={size} />
  );
}
