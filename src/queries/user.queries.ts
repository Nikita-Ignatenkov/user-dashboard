import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { UserService } from '../services/user.service';

export const useUsers = () => {
  return useInfiniteQuery({
    queryKey: ['users'],
    queryFn: ({ pageParam = 0 }) => UserService.getAllUsers(pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage.skip + lastPage.limit < lastPage.total 
        ? lastPage.skip + lastPage.limit 
        : undefined;
    },
    initialPageParam: 0,
  });
};

export const useUserById = (id: number) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => UserService.getUserById(id),
  });
};