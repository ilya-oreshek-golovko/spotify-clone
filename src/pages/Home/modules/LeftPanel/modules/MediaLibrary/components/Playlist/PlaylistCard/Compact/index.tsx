import { GiPin } from "react-icons/gi";
import styles from "./index.module.scss";
import { TCompactCardProps } from "@/types";

export default function Compact({playlist} : TCompactCardProps) {
  return (
    <article className={styles["card"]}>
      <p className={styles["title"]}>{playlist.name}</p>
    </article>
  )
}
