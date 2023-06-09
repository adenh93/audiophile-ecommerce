import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({ variant = "primary", ...props }: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;
  return <button {...props} className={className} />;
}
