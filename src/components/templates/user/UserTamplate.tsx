import { useParams } from 'react-router-dom';
import { UserQueries } from '../../../queries/user.queries';
import { UserProfileSkeleton } from '../../../pages/user/UserProfileSkeleton';

export const UserTamplate = () => {
  const { id } = useParams();
  const { data: user, isLoading, isError } = UserQueries.useRetrieve(Number(id));

  if (isLoading) {
    return <UserProfileSkeleton />;
  }

  if (isError || !user) {
    return (
      <div className="max-w-md mx-auto py-8 text-center text-red-600">
        Пользователь не найден
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Информация о пользователе</h1>
      
      <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
        <div className="flex flex-col sm:flex-row sm:items-baseline">
          <span className="font-semibold w-16 sm:w-20 mb-1 sm:mb-0">ФИО:</span>
          <span>{user.firstName} {user.lastName}</span>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-baseline">
          <span className="font-semibold w-16 sm:w-20 mb-1 sm:mb-0">Возраст:</span>
          <span>{user.age}</span>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-baseline">
          <span className="font-semibold w-16 sm:w-20 mb-1 sm:mb-0">Пол:</span>
          <span>{user.gender === 'male' ? 'Мужской' : 'Женский'}</span>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-start">
          <span className="font-semibold w-16 sm:w-20 mb-1 sm:mb-0">Адрес:</span>
          <div>
            <p>{user.address.address}</p>
            <p className="text-gray-600">{user.address.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};