import React from "react";
import { Link } from "react-router-dom";
import { GitHubUser } from "./GitHubUser";

export function ShowGithubUser() {
  return (
    <div>
      <GitHubUser username="Bianca" />
      <br />
      <Link to="/"> Go back to Homepage </Link>
    </div>
  );
}
