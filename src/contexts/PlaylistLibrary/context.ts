import { createContext } from "react";
import { IPlayListContext } from "./types";

const initialState : IPlayListContext = {
    state:{
        libraryFormat: "standard"
    },
    actions:{
        setLibraryFormat: () => {}
    }
};

const PlaylistContext = createContext(initialState);

export default PlaylistContext;