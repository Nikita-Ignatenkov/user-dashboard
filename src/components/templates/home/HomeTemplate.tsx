import { UserQueries } from '../../../queries/user.queries';
import { UserCard } from '../../../components/elements/user-card/UserCard';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { HomeSkeleton } from '../../../pages/home/HomeSkeleton';

export const HomeTemplate = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const { 
    data, 
    isLoading, 
    isError, 
    error,
    fetchNextPage, 
    hasNextPage,
    isFetchingNextPage
  } = UserQueries.useList();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

  if (isError) {
    return (
      <div className="max-w-md mx-auto py-8 text-center text-red-600">
        Ошибка загрузки: {error.message}
      </div>
    );
  }

  return (
  <div className="max-w-md mx-auto py-8">
    <h1 className="text-2xl font-bold mb-6 text-center">Список пользователей</h1>
    
    <div className="space-y-3">
      {isLoading ? (
        [...Array(5)].map((_, i) => <HomeSkeleton key={`skeleton-${i}`} />)
      ) : (
        data?.pages.map((page) =>
          page.users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))
        )
      )}
    </div>

    {/* Индикатор загрузки при подгрузке */}
    <div ref={ref} className="h-10 mt-4">
      {isFetchingNextPage && [...Array(3)].map((_, i) => (
        <HomeSkeleton key={`fetching-${i}`} />
      ))}
      {!hasNextPage && !isLoading && (
        <p className="text-center text-gray-500">Все пользователи загружены</p>
      )}
    </div>
  </div>
);
};