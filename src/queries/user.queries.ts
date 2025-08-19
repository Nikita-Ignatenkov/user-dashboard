import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { UserService } from '../services/user.service';

// Лучше оформить в виде клаксса, как и service, тогда и BASE_KEY сможешь удобно в методы прокидывать

export const useUsers = () => {
  return useInfiniteQuery({
    queryKey: ['users'],
    queryFn: ({ pageParam = 0 }) => UserService.getAllUsers(pageParam),
    // можешь попробовать вынести вычисление новой страницы в отделую utility функцию в отдельном файле ./src/queries/utils/pagination/utils.ts
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