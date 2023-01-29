import React from "react";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error("Response Error");
    }
    return res.json();
  });

export function GitHubUser({ username }) {
  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return (
    <div>
      {!data && !error && <h3>Loading....</h3>}
      {data && !error && (
        <div>
          <div>
            <strong>ID</strong>: {data.id}
          </div>
          <div>
            <strong>Username</strong>: {data.login}
          </div>
          <div>
            <strong>Location</strong>:
            {data.location ? data.location : " unknown"}
          </div>
        </div>
      )}
      {error && <h3>There has been an error..</h3>}
    </div>
  );
}

/* Code extracted from Exercise Custom-hooks_04 :

function useGitHubUser(user){
  const [data, setData] = useState(user);

  async function FetchGitHubUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const json = await response.json();

    setData(json);
  }

  useEffect(() => {
    FetchGitHubUser(user);
  }, [user]);

  return {
    _data: data,
  }
}

export function GitHubUser({ username }) {
  const {_data} = useGitHubUser(username)

  return (
    <div>
      <div><strong>ID</strong>: {_data.id}</div>
      <div><strong>Username</strong>: {_data.login}</div>
      <div><strong>Location</strong>: {_data.location ? _data.location : "unknown"}</div>
    </div>
  );
}*/
