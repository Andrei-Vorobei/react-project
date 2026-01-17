import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from "react";

export const useObserver = (
  ref: RefObject<HTMLDivElement>,
  canLoad: boolean,
  isLoading: boolean,
  callback: ()=>void,
) => {
  const observer = useRef(null);

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    var cb: IntersectionObserverCallback = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        callback()
      }
    };

    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current)
  }, [isLoading]);
}