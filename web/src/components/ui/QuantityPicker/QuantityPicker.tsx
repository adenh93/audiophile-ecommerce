import { InputHTMLAttributes } from "react";
import styles from "./QuantityPicker.module.css";

type Attributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "min" | "max" | "disabled"
>;

type UpdateQuantityFn = (step: number) => void;

export interface QuantityPickerProps extends Attributes {
  value: number;
  step?: number;
  onIncrement: UpdateQuantityFn;
  onDecrement: UpdateQuantityFn;
}

export default function QuantityPicker({
  value,
  max,
  disabled,
  min = 1,
  step = 1,
  onIncrement,
  onDecrement,
}: QuantityPickerProps) {
  const isMin = value === min;
  const isMax = max ? value === max : false;

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={disabled || isMin}
        onClick={() => onDecrement(step)}
      >
        -
      </button>
      {value}
      <button
        className={styles.button}
        disabled={disabled || isMax}
        onClick={() => onIncrement(step)}
      >
        +
      </button>
    </div>
  );
}
