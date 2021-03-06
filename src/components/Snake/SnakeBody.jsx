import React from "react";
import { SnakeDot } from "./Snake.styled";

export default function SnakeBody({ snakeDots }) {
  return (
    <div>
      {snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        return <SnakeDot key={i} style={style} />;
      })}
    </div>
  );
}
