import { useCallback, useReducer, useState } from "react";
import PlaylistContext from "./context";
import { IPlayListContext, TLibraryFormat } from "./types";
import { DefaultProps } from "@/types";
import reducer from "./reducer";

function PlaylistContextProvider({children} : DefaultProps){

    // const [libraryFormat, setLibraryFormat] = useState<TLibraryFormat>("compact");
    // const [sortingType, setSortingType] = useState<TLibraryFormat>("compact");

    const [state, dispatch] = useReducer(reducer, {
        libraryFormat: "grid",
        sortingType: "author"
    });

    // const toggleLibraryFormat = useCallback((newFormat : TLibraryFormat) => {
    //     setLibraryFormat(newFormat);
    // }, []);

    const contextValue : IPlayListContext = {
        state,
        dispatch
    };

    return(
        <PlaylistContext.Provider value={contextValue}>
            {children}
        </PlaylistContext.Provider>
    )
}

export default PlaylistContextProvider;