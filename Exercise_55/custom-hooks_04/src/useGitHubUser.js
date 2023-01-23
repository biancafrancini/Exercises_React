import { useState, useEffect } from "react";

//Logic extracted from useEffect_03 to fetch Github user's data and put it into a custom hook
export function useGitHubUser(user) {
  const [data, setData] = useState(user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function FetchGitHubUser(username) {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();

      setData(json);
      setLoading(false);
      //console.log(json);
    } catch (error) {
      setError(error);
      setData(null);
    }
  }

  useEffect(() => {
    FetchGitHubUser(user);
  }, [user]);

  return {
    _data: data,
    _loading: loading,
    _error: error,
  };
}
//
