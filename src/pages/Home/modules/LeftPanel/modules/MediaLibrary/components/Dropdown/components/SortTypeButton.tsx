import { TSortingType } from '@/contexts/PlaylistLibrary/types'
import { usePlaylistDispatch, usePlaylistState } from '@/contexts/PlaylistLibrary/use';
import { FaCheck } from "react-icons/fa";

type SortTypeButtonProps = {
  styles : any,
  sortingType : TSortingType,
  title : string,
}

export default function SortTypeButton({styles, sortingType, title} : SortTypeButtonProps) {
  const dispatch = usePlaylistDispatch();
  const {sortingType : currentSortingType} = usePlaylistState();

  const getGroupStyles = () => {
    return currentSortingType == sortingType ? `${styles["group-option"]} ${styles["selected"]}` : styles["group-option"];
  }

  return (
    <li className={getGroupStyles()} onClick={() => dispatch({type: "toggleSortingType", payload: sortingType})}>
      {title}
      {
        currentSortingType == sortingType && <FaCheck className={styles["group-img-check"]}/>
      }
    </li>
  )
}
