import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const fetchData = async () => {
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("Something went wrong");
        }
        const data = await req.json();
        setData(data);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isPending, error };
}
