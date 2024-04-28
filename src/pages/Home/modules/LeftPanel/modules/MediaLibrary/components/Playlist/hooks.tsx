import { usePlaylistState } from "@/contexts/PlaylistLibrary/use";
import styles from "./index.module.scss";
import Grid from "./PlaylistCard/Grid";
import { IPlaylist } from "@/types";
import responseTest from "@/static";
import Compact from "./PlaylistCard/Compact";
import Standard from "./PlaylistCard/Standard";
import { useCallback, useMemo } from "react";

function usePlaylistManagement(){
    const {libraryFormat} = usePlaylistState();
    const listStyle = useMemo(() => styles["playlist-wrapper"] + ` ${styles[libraryFormat]}`, [libraryFormat]);
  
    const List = useCallback(() => {
        switch(libraryFormat){
            case "grid":{
                return(
                    responseTest.items.map((playlist : IPlaylist) => {
                        return <Grid playlist={playlist}/>;
                    })
                )
            }
            case "compact":{
                return(
                    responseTest.items.map((playlist : IPlaylist) => {
                        return <Compact playlist={playlist}/>;
                    })
                )
            }
            case "standard":{
                return(
                    responseTest.items.map((playlist : IPlaylist) => {
                        return <Standard playlist={playlist}/>;
                    })
                )
            }
        }
    }, [libraryFormat, responseTest])

    return{
        List,
        listStyle
    }
}

export{
    usePlaylistManagement
}