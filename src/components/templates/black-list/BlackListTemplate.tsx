import { useQuery } from '@tanstack/react-query';
import { UserService } from '../../../services/user.service';
import { useBlackListStore } from '../../../stores/black-list';
import { Link } from 'react-router-dom';
import { UserSkeleton } from '../../ui/skeleton/UserSkeleton';

export const BlackListTemplate = () => {
  const { blackList, removeFromBlackList } = useBlackListStore();
  
  const { data: users, isLoading } = useQuery({
    queryKey: ['blacklisted-users', blackList], // Добавляем blackList в ключ запроса
    queryFn: async () => {
      if (blackList.length === 0) return [];
      
      const requests = blackList.map((id) =>
        UserService.getUserById(id).catch(() => null)
      );
      const results = await Promise.all(requests);
      return results.filter((user) => user !== null);
    },
  });

  const handleRemove = (id: number) => {
    removeFromBlackList(id);
    // Не нужно явно вызывать refetch - изменение blackList через store
    // автоматически обновит запрос благодаря изменению queryKey
  };

  return (
    <div className="max-w-md mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Чёрный список</h1>
      
      {isLoading ? (
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <UserSkeleton key={i} />
          ))}
        </div>
      ) : users && users.length > 0 ? (
        <ul className="space-y-3">
          {users.map((user) => (
            <li key={user!.id} className="border p-3 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <Link 
                  to={`/user/${user!.id}`}
                  className="hover:underline flex-grow"
                >
                  {user!.firstName} {user!.lastName}
                </Link>
                <button 
                  onClick={() => handleRemove(user!.id)}
                  className="text-red-600 hover:text-red-800 text-sm ml-4"
                >
                  Удалить
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Список пуст</p>
      )}
    </div>
  );
};