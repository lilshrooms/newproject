import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      <div 
        className={`
          absolute z-10 p-2 mt-1 text-sm font-medium text-white 
          bg-gray-900 rounded-lg shadow-sm dark:bg-gray-700 
          w-64 transition-opacity duration-300 ease-in-out
          ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        style={{
          left: 'calc(100% + 10px)',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        {content}
      </div>
    </div>
  );
}