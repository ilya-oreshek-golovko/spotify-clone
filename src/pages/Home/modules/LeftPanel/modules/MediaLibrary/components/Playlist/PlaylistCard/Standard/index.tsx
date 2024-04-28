import { TGridCardProps } from "@/types";
import styles from "./index.module.scss";
import { GiPin } from "react-icons/gi";
import { FiMusic } from "react-icons/fi";

export default function Standard({playlist} : TGridCardProps) {

  const {images, name : playlistName, owner} = playlist;

  return (
    <article className={styles["card"]}>
      <div className={styles["img-wrapper"]}>
        {
          images 
          ? <img src={images[0].url} alt={playlistName} />
          : <FiMusic className={styles["img-default"]}/>
        }
      </div>
      <div className={styles["content-wrapper"]}>
        <p>{playlistName}</p>
        <p>{owner.display_name}</p>
      </div>
    </article>
  )
}
