import { HTMLAttributes } from "react";
import styles from "./Subtitle.module.css";

export default function Subtitle(props: HTMLAttributes<HTMLHeadingElement>) {
  return <h6 {...props} className={styles.subtitle} />;
}
