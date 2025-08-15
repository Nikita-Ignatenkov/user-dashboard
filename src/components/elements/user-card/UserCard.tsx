import type { IUser } from '../../../types/user.types';
import { Link } from 'react-router-dom';
import { useBlackListStore } from '../../../stores/black-list';
import { Button } from '../../ui/button/Button';

export const UserCard = ({ user }: { user: IUser }) => {
  const { blackList, addToBlackList, removeFromBlackList } = useBlackListStore();
  const isBlacklisted = blackList.includes(user.id);

  const handleToggle = () => {
    isBlacklisted ? removeFromBlackList(user.id) : addToBlackList(user.id);
  };

  return (
  <div className={`border rounded-lg p-4 transition-all ${
    isBlacklisted 
      ? 'bg-red-50 border-red-200' 
      : 'hover:shadow-md hover:border-gray-300'
  }`}>
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <Link
        to={`/user/${user.id}`}
        className={`flex-grow min-w-0 ${
          isBlacklisted 
            ? 'text-red-600 hover:text-red-800' 
            : 'hover:text-blue-600'
        }`}
      >
        <div className="truncate">
          {user.firstName} {user.lastName}
        </div>
      </Link>
      
      <div className="flex-shrink-0">
        <Button
          variant={isBlacklisted ? 'danger' : 'default'}
          size="sm"
          onClick={handleToggle}
          className="w-full sm:w-auto"
        >
          {isBlacklisted ? 'Заблокирован' : 'Блокировать'}
        </Button>
      </div>
    </div>
  </div>
);
};