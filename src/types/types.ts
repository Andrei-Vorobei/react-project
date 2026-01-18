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

export type OptionType = {
  value: string | number;
  name: string;
}

export type SortType = keyof Omit<ItemType, 'id'>;

export type SelectType = {
  defaultValue: string;
  value: string | number;
  options: OptionType[];
  onChange: (val: string | number) => void;
};

// export type SelectType<T, O> = {
//   defaultValue: T;
//   value: T;
//   options: O[]
//   onChange: (val: T) => void;
// };

export type FilterType = {
  sort: SortType | '';
  search: string;
};

export type PostFilterType = {
  filter: FilterType;
  setFilter: Dispatch<SetStateAction<FilterType>>
};
