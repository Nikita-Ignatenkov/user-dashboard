import { Skeleton } from '../../components/ui/skeleton/Skeleton';

export const UserProfileSkeleton = () => {
  return (
    <div className="max-w-md mx-auto py-8 animate-pulse">
      {/* Заголовок */}
      <Skeleton width="12rem" height="2rem" className="mb-6" />
      
      {/* Основная информация */}
      <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
        {/* ФИО */}
        <div className="flex items-baseline">
          <Skeleton width="4rem" height="1rem" className="mr-4" />
          <Skeleton width="10rem" height="1.25rem" />
        </div>
        
        {/* Возраст */}
        <div className="flex items-baseline">
          <Skeleton width="4rem" height="1rem" className="mr-4" />
          <Skeleton width="2.5rem" height="1rem" />
        </div>
        
        {/* Пол */}
        <div className="flex items-baseline">
          <Skeleton width="4rem" height="1rem" className="mr-4" />
          <Skeleton width="5rem" height="1rem" />
        </div>
        
        {/* Адрес */}
        <div className="flex items-baseline">
          <Skeleton width="4rem" height="1rem" className="mr-4" />
          <div className="flex-1 space-y-2">
            <Skeleton width="100%" height="1rem" />
            <Skeleton width="75%" height="1rem" />
          </div>
        </div>
      </div>
    </div>
  );
};