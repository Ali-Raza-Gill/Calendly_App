import React from "react";

interface ButtonProps {
  name: string;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <div>
      <button
        className="h-[44px] w-auto bg-[#0069FF] hover:bg-[#0069FF] text-white font-bold py-2 px-4 rounded-3xl"
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
