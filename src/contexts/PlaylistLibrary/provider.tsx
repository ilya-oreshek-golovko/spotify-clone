import { useCallback, useReducer, useState } from "react";
import PlaylistContext from "./context";
import { IPlayListContext, TLibraryFormat } from "./types";
import { DefaultProps } from "@/types";
import reducer from "./reducer";

function PlaylistContextProvider({children} : DefaultProps){

    const [state, dispatch] = useReducer(reducer, {
        libraryFormat: "grid",
        sortingType: "recentlyListened"
    });

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