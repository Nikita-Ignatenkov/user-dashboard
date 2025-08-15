import { buttonVariants } from './button.interface';

interface ButtonProps {
  children: React.ReactNode;
  variant?: keyof typeof buttonVariants;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) => {
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
      {children}
    </button>
  );
};