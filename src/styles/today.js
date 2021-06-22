import styled from "styled-components";

export const TodayContainer = styled.div`
  display: flex;
  gap: 0rem;
  flex-direction: column;
`;

export const Tittle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  height: 3rem;
`;

export const Day = styled.div`
  font-size: 3rem;
`;

export const hamburgerStyle = (isdisplayed) => {
  const b = isdisplayed ? "0deg" : "90deg";
  return {
    cursor: "pointer",
    color: "#114F78",
    fontSize: "3rem",
    transform: `rotate(${b})`,
    transitionDuration: "0.3s",
  };
};
