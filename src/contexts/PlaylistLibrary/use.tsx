import { useContext } from "react";
import PlaylistContext from "./context";


export function usePlaylistctions(){
    const contextVal = useContext(PlaylistContext);

    return contextVal.actions
}

export function usePlaylistState(){
    const contextVal = useContext(PlaylistContext);

    return contextVal.state
}