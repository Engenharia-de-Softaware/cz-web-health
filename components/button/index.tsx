import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  label: string;
  route: string;
  onClick: () => void;
}

const Button = ({ label, route, onClick }: ButtonProps) => {
  return (
    <div>
      <a onClick={onClick} className={styles.button}>
        {label}
      </a>
    </div>
  );
};

export default Button;
