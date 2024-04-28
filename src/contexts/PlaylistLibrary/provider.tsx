import { useCallback, useState } from "react";
import PlaylistContext from "./context";
import { IPlayListContext, TLibraryFormat } from "./types";
import { DefaultProps } from "@/types";

function PlaylistContextProvider({children} : DefaultProps){

    const [libraryFormat, setLibraryFormat] = useState<TLibraryFormat>("standard");

    const toggleLibraryFormat = useCallback((newFormat : TLibraryFormat) => {
        setLibraryFormat(newFormat);
    }, []);

    const contextValue : IPlayListContext = {
        state:{
            libraryFormat
        },
        actions:{
            setLibraryFormat: toggleLibraryFormat
        }
    };

    return(
        <PlaylistContext.Provider value={contextValue}>
            {children}
        </PlaylistContext.Provider>
    )
}

export default PlaylistContextProvider;