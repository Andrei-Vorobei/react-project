import { ItemType, SortType } from "@/types/types";
import { useMemo } from "react";

export const useSortedPosts = (posts: ItemType[], sort: SortType | '') => {
  
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort as SortType]
        .localeCompare(b[sort as SortType]));
    }
    return posts;
  }, [ sort, posts ]);
  
  return sortedPosts;
};

export const usePosts = (posts: ItemType[], sort: SortType | '', search: string) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));
  }, [ search, posts ])
  
  return sortedAndSearchedPosts;
};