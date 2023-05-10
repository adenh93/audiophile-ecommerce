import { HTMLAttributes } from "react";
import { IconCaretRight } from "@app/components/ui/Icon";
import styles from "./TextButton.module.css";

export default function TextButton({
  children,
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={styles.text}>
      {children} <IconCaretRight className={styles.icon} />
    </button>
  );
}
