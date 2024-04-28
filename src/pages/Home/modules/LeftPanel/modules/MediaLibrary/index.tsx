import styles from "./index.module.scss";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { FaPlus, FaArrowRight, FaMusic  } from "react-icons/fa";
import { CiSearch, CiCircleList } from "react-icons/ci";
import WithTooltip from "@/components/withTooltip/index";
import Playlist from "./components/Playlist";
import { useState } from "react";
import { useDrowdown } from "./hooks";

export default function MediaLibrary() {
  const {
    handleDropdown,
    ShowDropdown,
    dropdownRef
  } = useDrowdown();
  const [down, setDown] = useState(false);

  const RecentlyListened = () => {
    const buttonStyle = styles["btn"] + (down ? ` ${styles["mousedown"]}` : ` ${styles["mouseup"]}`);
    return(
      <div className={buttonStyle} ref={dropdownRef} onClick={handleDropdown} onMouseDown={() => setDown(true)} onMouseUp={() => setDown(false)}>
        Недавно прослушано
        <CiCircleList className={styles["btn-icon"] + (down ? ` ${styles["mousedown"]}` : "")} onClick={handleDropdown} />
      </div>
    )
  }

  return (
    <section className={styles["main-panel"]}>
        
      <div className={styles["media-library"]}>
        <WithTooltip tooltop="Закрыть мою медиатеку">
          <div className={styles["btn"]}>
            <TfiLayoutMediaRightAlt className={styles["btn-icon"]} />
            <a href="№">Моя медиатека</a>
          </div>
        </WithTooltip>
    
        <div className={styles["btn-actions"]}>
          <WithTooltip tooltop="Создать плейлист или папку">
            <FaPlus className={styles["btn-icon"]}/>
          </WithTooltip>
          <WithTooltip tooltop="Развернуть">
            <FaArrowRight className={styles["btn-icon"]}/>
          </WithTooltip>
        </div>
      </div>

      <div className={styles["action-btn-wrapper"]}>
        <WithTooltip tooltop="Искать в медиатеке">
          <CiSearch className={styles["btn-search"]}/>
        </WithTooltip>
        <RecentlyListened />
        <ShowDropdown/>
      </div>

      <Playlist />
    </section>
  )
}
