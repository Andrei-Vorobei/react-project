import { Dispatch, SetStateAction } from "react";

export type ItemType = {
  id: number;
  title: string;
  body: string;
}

export type PostItemType = {
  post: ItemType;
  number: number;
  deletePost: (id: number) => void;
};

export type PostListType = {
  posts: ItemType[];
  title: string;
  deletePost: (id: number) => void;
};

export type PostFormType = {
  create: (post: ItemType) => void;
};

type option = {
  value: string;
  name: string;
}

export type SortType = keyof Omit<ItemType, 'id'>;

export type SelectType = {
  defaultValue: string;
  value: SortType | '';
  options: option[]
  onChange: (val: string) => void;
};

export type FilterType = {
  sort: SortType | '';
  search: string;
};

export type PostFilterType = {
  filter: FilterType;
  setFilter: Dispatch<SetStateAction<FilterType>>
};
