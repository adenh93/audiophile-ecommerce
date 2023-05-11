import { HTMLAttributes } from "react";
import styles from "./Container.module.css";

export default function Container(props: HTMLAttributes<HTMLDivElement>) {
  const className = `${styles.container} ${props.className}`;
  return <div {...props} className={className} />;
}
