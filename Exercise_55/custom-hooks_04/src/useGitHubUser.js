import { useState, useEffect } from "react";

export function useGitHubUser(user) {
  const [data, setData] = useState(user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function FetchGitHubUser(username) {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();

      if (!response.ok) {
        throw new Error("Response Error", {
          cause: {
            response,
          },
        });
      }
      setData(json);
      setLoading(false);
      //console.log(json);
    } catch (error) {
      switch (error.cause.response?.status) {
        case 403:
          setError(true);
          setData(null);
          break;
        case 404:
          setError(true);
          setData(null);
          break;
      }
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
