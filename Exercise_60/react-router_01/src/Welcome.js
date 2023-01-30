import React from "react";

export function Welcome(props) {
  return (
    <div className="welcome">
      <p>Welcome <strong>{props.name}</strong>! 😃</p>
    </div>
  );
}