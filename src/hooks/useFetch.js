import { useEffect, useState } from "react";

export const useFetch = (URL) => {
  const [obj, setObj] = useState({
    data: [],
    loading: true,
    error: false,
  });

  const controller = new AbortController();
  async function fetchData() {
    try {
      const res = await fetch(URL, controller.signal);
      if (!res.ok) {
        setObj((prev) => ({ ...prev, error: true }));
      }
      const data = await res.json();
      setObj((prev) => ({ ...prev, data: data }));
    } catch (error) {
      setObj((prev) => ({ ...prev, error: true }));
    }
  }
  useEffect(() => {
    fetchData();

    return () => controller.abort();
  }, [URL]);
  const { data, loading, error } = obj;
  return { data, loading, error };
};
