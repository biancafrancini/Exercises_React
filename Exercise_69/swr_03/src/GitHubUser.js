import React from "react";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error("Response Error");
    }
    return res.json();
  });

function useGitHubUser(username) {
  const { data, error, mutate } = useSWR(username ? 
    `https://api.github.com/users/${username}` : null,
    fetcher,
  );

  function handleRefreshData(){
    mutate();
  }

  return {
    users: data,
    isError: error,
    reFetchData: handleRefreshData,
  }
}

export function GitHubUser({ username }) {
  const {users, isError, reFetchData} = useGitHubUser(username)

  return (
    <div>
      {!users && !isError && <h3>Loading.... 🫣</h3>}
      {!users && !isError && !username && <h3>Sorry, there are no data for your request 🧐</h3>}
      {users && !isError && (
        <div>
          <div>
            <strong>ID</strong>: {users.id}
          </div>
          <div>
            <strong>Username</strong>: {users.login}
          </div>
          <div>
            <strong>Location</strong>:
            {users.location ? users.location : " unknown"}
          </div>
          <button onClick={reFetchData}>reFetchData data manually</button>
        </div>
      )}
      {isError && <h3>There has been an error.. please, try again🥺</h3>}
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
