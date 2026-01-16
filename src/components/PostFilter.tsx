import { PostFilterType, SortType } from "@/types/types";
import { MyInput } from "./UI/input/MyInput";
import { MySelect } from "./UI/select/MySelect";

export const PostFilter: React.FC<PostFilterType> = ({ filter, setFilter }) => {

  return (
    <>
      <MyInput
        type='text'
        placeholder='Поиск...'
        value={filter.search}
        onChange={(e) => setFilter(state => ({ ...state, search: e.target.value }))}
      />
      <MySelect
        value={filter.sort}
        onChange={(sort: SortType) => setFilter(state => ({ ...state, sort: sort}))}
        defaultValue='Сортировка по'
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' }
        ]}
      />
    </>
  );
};