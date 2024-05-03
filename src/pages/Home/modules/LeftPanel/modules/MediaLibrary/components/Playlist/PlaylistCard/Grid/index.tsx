import { GiPin } from "react-icons/gi";
import styles from "./index.module.scss";
import { TGridCardProps } from "@/types";
import { FiMusic } from "react-icons/fi";

export default function Grid({playlist} : TGridCardProps) {

  const {images} = playlist;

  return (
    <article className={styles["card"]}>
      {
        images 
        ? <img className={styles["img-target"]} src={images[0].url} alt={playlist.name} />
        : <FiMusic className={styles["img-default"]}/>
      }
    </article>
  )
}
