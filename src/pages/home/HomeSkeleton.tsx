import { Skeleton } from '../../components/ui/skeleton/Skeleton';

export const HomeSkeleton = () => {
  return (
    <div className="border rounded-lg p-4 mb-3 last:mb-0">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-grow min-w-0 space-y-2">
          <Skeleton width="100%" height="1rem" />
          <Skeleton width="75%" height="1rem" />
        </div>
        <Skeleton width="6rem" height="2rem" className="shrink-0" />
      </div>
    </div>
  );
};