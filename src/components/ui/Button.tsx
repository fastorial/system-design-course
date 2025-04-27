import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) => {
  const baseClasses = 'rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
  };
  
  const sizeClasses = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2.5 px-5',
    lg: 'text-lg py-3 px-6'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;