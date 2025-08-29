import { buttonVariants } from './button.interface';
import type { IButtonProps } from './button.interface';

export const Button = ({
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}: IButtonProps) => {
  const baseClasses = 'rounded transition-colors font-medium';
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <button
      className={`${baseClasses} ${buttonVariants[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {props.children}
    </button>
  );
};