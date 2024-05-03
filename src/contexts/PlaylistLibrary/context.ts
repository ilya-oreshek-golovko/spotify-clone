import { createContext } from "react";
import { IPlayListContext } from "./types";

const initialState : IPlayListContext = {
    state:{
        libraryFormat: "compact",
        sortingType: "recentlyListened"
    },
    dispatch: () => {}
};

const PlaylistContext = createContext(initialState);

export default PlaylistContext;