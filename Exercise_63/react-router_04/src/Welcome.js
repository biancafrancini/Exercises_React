import React from "react";
import { Link, useParams } from "react-router-dom";

export function Welcome() {
  const {username} = useParams();
  return (
    <div className="welcome">
      <h1>Welcome {username}! 😃</h1>
      <Link to={`/counter/${username}`}>Start the Counter now ⏳ </Link> or
      <Link to={`/users/${username}`}> Find out your userProfile </Link>
    </div>
  );
}
