export const getPageCount = (totalCount: number, limit: number) => {
  return Math.ceil(totalCount / limit);
};

export const getClassName = (indx: number, page: number) => {
  if (indx + 1 === page) {
    return 'pagination-item page-current';
  }

  return 'pagination-item';
};
