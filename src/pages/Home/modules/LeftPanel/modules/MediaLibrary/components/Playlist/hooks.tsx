import { usePlaylistState } from "@/contexts/PlaylistLibrary/use";
import styles from "./index.module.scss";
import Grid from "./PlaylistCard/Grid";
import { IPlaylist } from "@/types";
import responseTest from "@/static";
import Compact from "./PlaylistCard/Compact";
import Standard from "./PlaylistCard/Standard";
import { useCallback } from "react";

function usePlaylistManagement(){
    const {libraryFormat} = usePlaylistState();
  
    const List = useCallback(() => {
        switch(libraryFormat){
            case "grid":{
                return(
                    <>
                    {
                    responseTest.items.map((playlist : IPlaylist) => {
                        return <Grid key={playlist.id} playlist={playlist}/>;
                    })
                    }
                    </>
                )
            }
            case "compact":{
                return(
                    <>
                    {
                        responseTest.items.map((playlist : IPlaylist) => {
                            return <Compact key={playlist.id} playlist={playlist}/>;
                        })
                    }
                    </>
                )
            }
            case "standard":{
                return(
                    <>
                    {
                    responseTest.items.map((playlist : IPlaylist) => {
                        return <Standard key={playlist.id} playlist={playlist}/>;
                    })
                    }
                    </>
                )
            }
        }
    }, [libraryFormat, responseTest])

    return{
        List,
        listStyle : styles[libraryFormat]
    }
}

export{
    usePlaylistManagement
}