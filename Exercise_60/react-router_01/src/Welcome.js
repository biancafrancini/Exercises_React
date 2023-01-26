import React from "react";

export function Welcome(props) {
  return (
    <div className="welcome">
      <h1>Welcome, <strong>{props.name}</strong>! 😃</h1>
    </div>
  );
}