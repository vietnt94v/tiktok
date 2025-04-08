import React from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  value?: string;
  size?: "sm" | "md" | "lg";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name?: string;
  id?: string;
  autoComplete?: string;
  required?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "h-8 text-sm px-2",
  md: "h-10 text-md px-4",
  lg: "h-12 text-lg px-6",
};

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  size = "md",
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  name,
  id,
  autoComplete,
  required,
  className = "",
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
      className={`${sizeClasses[size]} ${className} w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
    />
  );
};

export default Input;
