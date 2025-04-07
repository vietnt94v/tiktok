import React from "react";

interface ButtonProps {
  onClick?: () => void;
  disable?: boolean;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "orange" | "blue" | "green" | "red" | "yellow" | "purple";
}

const sizeClasses = {
  sm: "h-8 text-sm px-2",
  md: "h-10 text-md px-4",
  lg: "h-12 text-lg px-6",
};

const colorClasses = {
  orange: "bg-orange-500 hover:bg-orange-700 text-white",
  blue: "bg-blue-500 hover:bg-blue-700 text-white",
  green: "bg-green-500 hover:bg-green-700 text-white",
  red: "bg-red-500 hover:bg-red-700 text-white",
  yellow: "bg-yellow-500 hover:bg-yellow-700 text-white",
  purple: "bg-purple-500 hover:bg-purple-700 text-white",
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  disable,
  children,
  size = "md",
  color = "blue",
}) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disable}
        className={`${sizeClasses[size]} ${colorClasses[color]} cursor-pointer rounded`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
