import { HTMLAttributes } from "react";
import styles from "./Overline.module.css";

export default function Overline(props: HTMLAttributes<HTMLHeadingElement>) {
  const className = `${styles.overline} ${props.className}`;
  return <h6 {...props} className={className} />;
}
