import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { UserService } from '../services/user.service';
import { getNextPageParam, DEFAULT_PAGINATION } from './utils/pagination.utils';
import type { IUsersResponse } from '../types/user.types';

export class UserQueries {
  private static readonly BASE_KEY = 'users';

  static useList() {
    return useInfiniteQuery<IUsersResponse, Error>({
      queryKey: [this.BASE_KEY],
      queryFn: ({ pageParam = DEFAULT_PAGINATION.skip }) => 
        UserService.list({ 
          skip: pageParam as number,
          limit: DEFAULT_PAGINATION.limit 
        }),
      getNextPageParam,
      initialPageParam: DEFAULT_PAGINATION.skip,
    });
  }

  static useRetrieve(id: number) {
    return useQuery({
      queryKey: [this.BASE_KEY, id],
      queryFn: () => UserService.retrieve(id),
    });
  }
}