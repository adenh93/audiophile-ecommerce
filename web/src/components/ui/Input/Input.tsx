import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

type Attributes = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export interface InputProps extends Attributes {
  label: string;
  error?: string;
}

export default function Input({ label, error, ...props }: InputProps) {
  const containerClassName = `${styles.container} ${error && styles.error}`;

  return (
    <div className={containerClassName}>
      <div className={styles.labelRow}>
        <label className={styles.label}>{label}</label>
        {error && <span className={styles.errorLabel}>{error}</span>}
      </div>
      <input {...props} aria-invalid={!!error} className={styles.input} />
    </div>
  );
}
