import type { ISkeletonProps } from './skeleton.interface';

export const Skeleton = ({
  width = '100%',
  height = '1rem',
  rounded = 'md',
  className = '',
  ...props
}: ISkeletonProps) => {
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

  return (
    <div
      className={`bg-gray-200 animate-pulse ${roundedClasses[rounded]} ${className}`}
      style={{ width, height }}
      {...props}
    />
  );
};