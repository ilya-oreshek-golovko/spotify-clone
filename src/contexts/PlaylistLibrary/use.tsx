import { useContext } from "react";
import PlaylistContext from "./context";


export function usePlaylistDispatch(){
    const contextVal = useContext(PlaylistContext);

    return contextVal.dispatch;
}

export function usePlaylistState(){
    const contextVal = useContext(PlaylistContext);

    return contextVal.state
}