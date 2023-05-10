import { HTMLAttributes } from "react";
import styles from "./Overline.module.css";

export default function Overline(props: HTMLAttributes<HTMLHeadingElement>) {
  return <h6 {...props} className={styles.overline} />;
}
