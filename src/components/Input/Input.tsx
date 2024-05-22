import "./Input.css";

import { ReactNode } from "react";

interface InputProps {
  name: string;
  label?: ReactNode;
  type?: string;
}

export const Input = ({ name, label, type, ...rest }: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (value > 999) {
      event.target.value = "999";
    }
  };

  return (
    <div className="inputDiv">
      {!!label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        onChange={handleChange}
        type={type}
        max="999"
        min="1"
        {...rest}
      />
    </div>
  );
};
