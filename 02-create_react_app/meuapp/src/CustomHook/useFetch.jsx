import React from "react";

export const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (e) {
      json = null;
      setError(e.message);
    } finally {
      setData(json);
      console.log("json", json);
      setLoading(false);
    }
  }, []);

  return { data, loading, error, request };
};
