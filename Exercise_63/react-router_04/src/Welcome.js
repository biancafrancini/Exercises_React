import React from "react";
import { Link } from "react-router-dom";

export function Welcome(props) {
  return (
    <div className="welcome">
      <h1>Welcome {props.name}! 😃</h1>
      <Link to="counter">Start the Counter now ⏳ </Link>  or   
      <Link to="users/:username"> Find out your userProfile </Link>
    </div>
  );
}
