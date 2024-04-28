import { GiPin } from "react-icons/gi";
import styles from "./index.module.scss";
import { TGridCardProps } from "@/types";

export default function Grid({playlist} : TGridCardProps) {
  return (
    <article className={styles["card"]}>
      <img src={playlist.images ? playlist.images[0].url : ""} alt={playlist.name} />
    </article>
  )
}
