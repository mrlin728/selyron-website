import React from 'react';

interface SelyronLogoProps {
  className?: string;
  size?: number;
  variant?: 'solid' | 'outline' | 'minimal';
}

export const SelyronLogo: React.FC<SelyronLogoProps> = ({ 
  className = '', 
  size = 28,
  variant = 'solid' 
}) => {
  if (variant === 'outline') {
    return (
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="7.25" stroke="#09090B" strokeWidth="1.5" fill="#FFFFFF"/>
        {/* Upper Track */}
        <path 
          d="M8.5 12C8.5 10.07 10.07 8.5 12 8.5H20C21.93 8.5 23.5 10.07 23.5 12C23.5 13.93 21.93 15.5 20 15.5H13" 
          stroke="#09090B" 
          strokeWidth="2.2" 
          strokeLinecap="round"
        />
        {/* Lower Track */}
        <path 
          d="M23.5 20C23.5 21.93 21.93 23.5 20 23.5H12C10.07 23.5 8.5 21.93 8.5 20C8.5 18.07 10.07 16.5 12 16.5H19" 
          stroke="#09090B" 
          strokeWidth="2.2" 
          strokeLinecap="round"
        />
        {/* Center Deterministic State Indicator */}
        <circle cx="16" cy="16" r="2.2" fill="#10B981" />
      </svg>
    );
  }

  // Default 'solid' variant (Sleek black monolith with white conduits and emerald pulse node)
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="7.5" fill="#09090B" />
      <rect x="0.5" y="0.5" width="31" height="31" rx="7" stroke="#27272A" strokeWidth="1" />
      {/* Upper Pipeline Track */}
      <path 
        d="M9 12C9 10.34 10.34 9 12 9H20C21.66 9 23 10.34 23 12C23 13.66 21.66 15 20 15H13.5" 
        stroke="#FFFFFF" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      {/* Lower Pipeline Track */}
      <path 
        d="M23 20C23 21.66 21.66 23 20 23H12C10.34 23 9 21.66 9 20C9 18.34 10.34 17 12 17H18.5" 
        stroke="#FFFFFF" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      {/* Center Deterministic Execution Checkpoint */}
      <circle cx="16" cy="16" r="2" fill="#10B981" />
    </svg>
  );
};
