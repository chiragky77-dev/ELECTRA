import React from 'react';

interface BadgeProps {
  variant?: 'default' | 'accent' | 'simulation' | 'success' | 'warning';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  icon,
  className = ''
}) => {
  return (
    <span className={`electra-badge ${variant} ${className}`}>
      {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
    </span>
  );
};
