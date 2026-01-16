import { Dispatch, SetStateAction } from "react";
import { getClassName } from "@/utils/pages";
import { usePagination } from "@/hooks/usePagination";

type PaginationProps = {
  totalPages: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  page,
  setPage
}) => {
  const pagesAray = usePagination(totalPages);

  return (
    <div className='page-wrapper'>
      {pagesAray.map((item, indx) => 
        <span
          key={item}
          className={getClassName(indx, page)}
          onClick={() => setPage(item)}
        >
          {item}
        </span>
      )}
    </div>
  );
};
