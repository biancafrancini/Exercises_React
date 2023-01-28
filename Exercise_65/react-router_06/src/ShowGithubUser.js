import React from "react";
import { Link, useParams } from "react-router-dom";
import { GitHubUser } from "./GitHubUser";

export function ShowGithubUser() {
  const { username } = useParams();
  return (
    <div>
      <GitHubUser username={username} />
      <br />
      <Link to="/"> Go back to Homepage</Link>
    </div>
  );
}
