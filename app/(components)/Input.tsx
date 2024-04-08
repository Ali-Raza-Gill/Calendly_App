import React from "react";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled: boolean;
  className: string;
  id: string;
}
const InputField: React.FC<InputProps> = ({
  type,
  name,
  onChange,
  value,
  disabled,
  placeholder,
  className,
}) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        disabled={disabled}
        className={className}
      />
    </div>
  );
};

export default InputField;
