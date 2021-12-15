import { Container } from '@src/components';
import React from 'react';

interface TextInputProps {
  label: string;
  className?: string;

  name: string;
  required?: boolean;
  dark?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  className = '',
  name,
  required = false,
  dark = false,
}) => {
  return (
    <div className={`w-full ${dark ?? 'dark'} ${className}`}>
      <div
        className={`outline relative border-2 ${
          dark ? 'focus-within:border-white' : 'focus-within:border-navy-500'
        } rounded-md`}
      >
        <input
          autoComplete="off"
          type="text"
          name={name}
          placeholder={label}
          className={`block px-4 py-2 w-full ${
            dark ? 'text-white' : 'text-navy-500'
          } text-md placeholder-transparent  appearance-none focus:outline-none bg-transparent`}
        />
        <label
          htmlFor={name}
          className={`absolute top-0 text-md ${
            dark ? 'text-whiteAlpha-500' : 'text-navy-100'
          } p-2 duration-300 origin-0`}
        >
          {label}
        </label>
      </div>
    </div>
  );
};
