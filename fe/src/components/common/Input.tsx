import React from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  name?: string;
  id?: string;
  autoComplete?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  className = "",
  name,
  id,
  autoComplete,
  required,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      name={name}
      id={id}
      autoComplete={autoComplete}
      required={required}
      className={`w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${className}`}
    />
  );
};

export default Input;
