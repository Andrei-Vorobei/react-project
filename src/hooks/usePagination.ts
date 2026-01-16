import { useMemo } from "react";

export const usePagination = (totalPages: number) => {
  const pagesAray = useMemo(() => {
    const pagesAray = [];
  
    for (let i = 0; i < totalPages; i++) {
      pagesAray.push(i + 1);
    }
  
    return pagesAray;
  }, [totalPages]);

  return pagesAray;
};

