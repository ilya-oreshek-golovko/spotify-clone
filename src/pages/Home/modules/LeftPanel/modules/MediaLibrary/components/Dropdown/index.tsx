import styles from "./index.module.scss";
import { BsList } from "react-icons/bs";
import { CiCircleList, CiGrid41 } from "react-icons/ci";
import LibraryFormatButton from "./components/LibraryFormatButton";
import SortTypeButton from "./components/SortTypeButton";
import React from 'react';

const Dropdown = React.forwardRef<HTMLUListElement>((props, ref) => {

  return (
    <ul className={styles["dropdown"]} ref={ref}>

        <li className={styles["group"]}>
            <p className={styles["group-title"]}>Сортировка</p>
            <ul className={styles["group-options"]}>
                <SortTypeButton title="Недавно прослушано" styles={styles} sortingType="recentlyListened" />
                <SortTypeButton title="Недавно добавлено" styles={styles} sortingType="recentlyAdded" />
                <SortTypeButton title="По алфавиту" styles={styles} sortingType="alphabetically" />
                <SortTypeButton title="По автору" styles={styles} sortingType="author" />
                <SortTypeButton title="Свой порядок" styles={styles} sortingType="custom" />
            </ul>
        </li>

        <hr />
        
        <li className={styles["group"]}>
            <p className={styles["group-title"]}>Формат библиотеки</p>
            <ul className={styles["group-options"]}>
                <LibraryFormatButton title="Компактный" styles={styles} libraryType="compact" ListIcon={BsList}/>
                <LibraryFormatButton title="Список" styles={styles} libraryType="standard" ListIcon={CiCircleList}/>
                <LibraryFormatButton title="Сетка" styles={styles} libraryType="grid" ListIcon={CiGrid41}/>
            </ul>
        </li>
        
    </ul>   
  )
}
)

export default Dropdown;