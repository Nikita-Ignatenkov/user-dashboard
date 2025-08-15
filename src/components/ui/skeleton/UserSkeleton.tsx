export const UserSkeleton = () => {
  return (
    <div className="border rounded-lg p-4 animate-pulse mb-3 last:mb-0">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-grow min-w-0 space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
        <div className="h-8 bg-gray-200 rounded w-24 sm:w-32 shrink-0"></div>
      </div>
    </div>
  );
};

export const UserProfileSkeleton = () => {
  return (
    <div className="max-w-md mx-auto py-8 animate-pulse">
      {/* Заголовок */}
      <div className="h-8 bg-gray-200 rounded w-48 mb-6"></div>
      
      {/* Основная информация */}
      <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
        {/* ФИО */}
        <div className="flex items-baseline">
          <div className="h-4 bg-gray-200 rounded w-16 mr-4"></div>
          <div className="h-5 bg-gray-200 rounded w-40"></div>
        </div>
        
        {/* Возраст */}
        <div className="flex items-baseline">
          <div className="h-4 bg-gray-200 rounded w-16 mr-4"></div>
          <div className="h-4 bg-gray-200 rounded w-10"></div>
        </div>
        
        {/* Пол */}
        <div className="flex items-baseline">
          <div className="h-4 bg-gray-200 rounded w-16 mr-4"></div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
        </div>
        
        {/* Адрес */}
        <div className="flex items-baseline">
          <div className="h-4 bg-gray-200 rounded w-16 mr-4"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};