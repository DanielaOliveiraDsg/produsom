// src/components/ui/FormField.tsx
import React from 'react';

interface BaseProps {
  label: string;
}

interface InputProps extends BaseProps, React.InputHTMLAttributes<HTMLInputElement> {}
interface TextAreaProps extends BaseProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <div className="w-full">
    <label htmlFor={props.id} className="block text-sm font-medium text-medium mb-2">
      {label}
    </label>
    <input
      {...props}
      className="w-full px-4 py-3 border-[1.5px] border-medium-light rounded-md text-medium focus:outline-none focus:ring-2 focus:ring-medium-light transition-all duration-200"
    />
  </div>
);

export const TextArea: React.FC<TextAreaProps> = ({ label, ...props }) => (
  <div className="w-full">
    <label htmlFor={props.id} className="block text-sm font-medium text-medium mb-2">
      {label}
    </label>
    <textarea
      {...props}
      className="w-full px-4 py-3 border-[1.5px] border-medium-light rounded-md text-medium focus:outline-none focus:ring-2 focus:ring-medium-light transition-all duration-200 resize-none"
    />
  </div>
);