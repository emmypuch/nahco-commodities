import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  icon,
  iconPosition = "left",
}) => {
  const baseClasses = `font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`;

  const variantClasses = {
    primary:
      "bg-[#A99474] hover:bg-transparent hover:text-[#C8C0B4] rounded-[100px] w-[218px] h-[56px] text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    danger: "bg-red-500 hover:bg-red-700 text-white",
  };

  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${
        sizeClasses[size]
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={disabled}
    >
      {icon && iconPosition === "left"}

      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
