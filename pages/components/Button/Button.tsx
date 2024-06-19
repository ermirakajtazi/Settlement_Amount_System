import React from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  color?: "blue" | "red" | "green";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
  color = "blue",
  disabled = false,
}) => {
  let buttonColor = "";
  const disabledStyles = "bg-gray-400 cursor-not-allowed";
  switch (color) {
    case "blue":
      buttonColor = "bg-blue";
      break;
    case "red":
      buttonColor = "bg-red";
      break;
    case "green":
      buttonColor = "bg-green";
      break;
    default:
      buttonColor = "bg-blue";
  }

  return (
    <button
      type={type}
      className={`button text-white font-bold py-2 px-4 rounded ${
        disabled ? disabledStyles : `${buttonColor}  hover:bg-opacity-75`
      }`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
