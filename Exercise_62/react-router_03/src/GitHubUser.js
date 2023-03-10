import { useState, useEffect } from "react";

export function GitHubUser({ username }) {
  const [data, setData] = useState("");

  async function FetchGitHubUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const json = await response.json();

    setData(json);
    //console.log(json);
  }

  useEffect(() => {
    FetchGitHubUser(username);
  }, [username]);

  return (
    <div>
      <div><strong>ID</strong>: {data.id ? data.id : "none"}</div>
      <div><strong>Username</strong>: {data.login ? data.login : "none"}</div>
      <div><strong>Location</strong>: {data.location ? data.location : "none"}</div>
    </div>
  );
}