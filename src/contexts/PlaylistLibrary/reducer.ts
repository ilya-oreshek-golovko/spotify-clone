import { PlayListContextActions, PlayListContextState } from "./types";

const reducer = (state: PlayListContextState, action: PlayListContextActions): PlayListContextState => {
    const { type, payload } = action;
    switch (type) {
        case "toggleLibraryFormat":
            return { ...state, libraryFormat: payload};
        case "toggleSortingType":
            return {...state, sortingType: payload}
        default:
            throw new Error(`Unknown action type: ${type}`);
    }
  };

  export default reducer;