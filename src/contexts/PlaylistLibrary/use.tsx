import { useContext } from "react";
import PlaylistContext from "./context";


export function usePlaylistActions(){
    const contextVal = useContext(PlaylistContext);

    return contextVal.actions
}

export function usePlaylistState(){
    const contextVal = useContext(PlaylistContext);

    return contextVal.state
}