import { useState } from "react";

type FetchingType = [ ()=> Promise<void>, boolean, string]

export const useFetching = (callback: ()=> Promise<void>): FetchingType => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [ fetching, isLoading, error ];

};