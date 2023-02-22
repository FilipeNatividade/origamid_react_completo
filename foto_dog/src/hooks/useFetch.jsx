import React from "react";
import { Api } from "../utils/Api/Api";

export const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    try {
      setError(null);
      setLoading(true);
      response = await Api.post(url, options);
      if (response.status !== 200);
      {
        throw new Error(response.message);
      }
    } catch (e) {
      response = null;
      setError(e.message);
    } finally {
      setLoading(false);
    }
  });

  return { data, loading, error, request };
};
