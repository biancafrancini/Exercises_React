import React from "react";
import { Link } from "react-router-dom";

export function Welcome(props) {
  return (
    <div className="welcome">
      <p>Welcome {props.name}! 😃</p>
      <Link to="counter">Start the Counter now ⏳ </Link>
      <br />
      or
      <br />
      <Link to="users/:username"> Find out your userProfile </Link>
    </div>
  );
}
