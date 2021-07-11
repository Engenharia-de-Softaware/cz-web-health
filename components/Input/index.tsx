import React from "react";
import styles from "./styles.module.css";

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Input = ({ label, onChange, value }: InputProps) => {
  return (
    <div>
      <input
        value={value}
        className={styles.input}
        type="text"
        placeholder={label}
        onChange={(value: React.ChangeEvent<HTMLInputElement>): void =>
          onChange(value.target.value)
        }
      />
    </div>
  );
};

export default Input;
