import { Skeleton } from '../../components/ui/skeleton/Skeleton';

export const BlackListSkeleton = () => {
  return (
    <div className="border p-3 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex-grow space-y-2">
          <Skeleton width="70%" height="1rem" />
          <Skeleton width="50%" height="1rem" />
        </div>
        <Skeleton width="4rem" height="2rem" className="ml-4" />
      </div>
    </div>
  );
};