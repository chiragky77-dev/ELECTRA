import React from 'react';

interface CardProps {
  children: React.ReactNode;
  interactive?: boolean;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  children,
  interactive = false,
  className = '',
  onClick,
  style
}) => {
  return (
    <div
      className={`electra-card ${interactive ? 'interactive' : ''} ${className}`}
      onClick={onClick}
      style={{
        cursor: interactive || onClick ? 'pointer' : 'default',
        ...style
      }}
    >
      {children}
    </div>
  );
};
