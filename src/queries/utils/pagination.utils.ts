import type { IPagination } from '../../types/root.types';

export const getNextPageParam = (lastPage: IPagination) => {
  return lastPage.skip + lastPage.limit < lastPage.total 
    ? lastPage.skip + lastPage.limit 
    : undefined;
};

export const DEFAULT_PAGINATION = {
  skip: 0,
  limit: 20
} as const;