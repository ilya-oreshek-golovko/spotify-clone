import { TLibraryFormat } from '@/contexts/PlaylistLibrary/types';
import { usePlaylistDispatch, usePlaylistState } from '@/contexts/PlaylistLibrary/use';
import { FaCheck } from "react-icons/fa";
import { IconType } from 'react-icons';
import { memo } from 'react';

type LibraryFormatButtonProps = {
    styles : any,
    libraryType : TLibraryFormat,
    title : string,
    ListIcon : IconType
}

export default function LibraryFormatButton({styles, libraryType, title, ListIcon} : LibraryFormatButtonProps) {
    const dispatch = usePlaylistDispatch();
    const {libraryFormat : currentLibraryFormat} = usePlaylistState();

    const getGroupStyles = () => {
        return currentLibraryFormat == libraryType ? `${styles["group-option"]} ${styles["selected"]}` : styles["group-option"];
    }

    return (
        <li className={getGroupStyles()} onClick={() => dispatch({type: "toggleLibraryFormat", payload: libraryType})}>
            <ListIcon className={styles["group-img"]} /> 
            {title}
            {
                currentLibraryFormat == libraryType && <FaCheck className={styles["group-img-check"]}/>
            }
        </li>
    )
}

