import React, { useState, useEffect } from "react";

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
      <div><strong>ID</strong>: {data.id}</div>
      <div><strong>Username</strong>: {data.login}</div>
      <div><strong>Location</strong>: {data.location}</div>
    </div>
  );
}

/* Solution two:

export function GitHubUser({ username }) {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((json) => {

        setData(json);
      });
  }, [username]);

  return (
      <div>
      <div><strong>ID</strong>: {data.id}</div>
      <div><strong>Username</strong>: {data.login}</div>
      <div><strong>Location</strong>: {data.location}</div>
    </div>
  );
}
*/
