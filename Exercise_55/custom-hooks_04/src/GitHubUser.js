import React from "react";
import { useGitHubUser } from "./useGitHubUser";

export function GitHubUser({ username }) {
  const {_data, _loading, _error} = useGitHubUser(username)

  return (
    <div>
      <h3>Status: {_loading ? "loading..." : "updated"}</h3>
      {_error && <h1>There has been an error</h1>}
      <hr />
      <div><strong>ID</strong>: {_data.id}</div>
      <div><strong>Username</strong>: {_data.login}</div>
      <div><strong>Location</strong>: {_data.location ? _data.location : "unknown"}</div>
    </div>
  );
}
