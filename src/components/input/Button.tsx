import React from "react";

interface SubmitButtonProps {
  loading?: boolean;
  label: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string; // Accept additional class names
}

const Button: React.FC<SubmitButtonProps> = ({
  loading = false,
  label,
  type = "button",
  onClick,
  className = "",
}) => {
  const buttonClass = className
    ? className
    : `bg-[#A77B37] p-[15px] text-[#fff] w-full mx-auto rounded`;
  return (
    <button
      type={type}
      disabled={loading}
      onClick={onClick}
      className={buttonClass}
    >
      {loading ? "loading..." : label}
    </button>
  );
};

export default Button;
