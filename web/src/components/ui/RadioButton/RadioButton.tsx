import { InputHTMLAttributes } from "react";
import styles from "./RadioButton.module.css";

type Attributes = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export interface RadioButtonProps extends Attributes {
  label: string;
}

export default function RadioButton({ label, ...props }: RadioButtonProps) {
  return (
    <label className={styles.label}>
      <input {...props} type="radio" className={styles.radio} />
      {label}
    </label>
  );
}
