import React, { useState, useEffect } from "react";

//Logic extracted from useEffect_03 to fetch a Github user's data and put it into a custom hook
function useGitHubUser(user){
  const [data, setData] = useState(user);

  async function FetchGitHubUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const json = await response.json();

    setData(json);
    //console.log(json);
  }

  useEffect(() => {
    FetchGitHubUser(user);
  }, [user]);

  return {
    _data: data,
  }
}
//

export function GitHubUser({ username }) {
  const {_data} = useGitHubUser(username)

  return (
    <div>
      <div><strong>ID</strong>: {_data.id}</div>
      <div><strong>Username</strong>: {_data.login}</div>
      <div><strong>Location</strong>: {_data.location ? _data.location : "unknown"}</div>
    </div>
  );
}
