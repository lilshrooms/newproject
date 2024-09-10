import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
}

export function Label({ htmlFor, children, ...props }: LabelProps) {
  return (
    <label htmlFor={htmlFor} {...props} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {children}
    </label>
  );
}