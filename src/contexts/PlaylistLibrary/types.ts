type TLibraryFormat = "grid" | "compact" | "standard";
type TSortingType = "recentlyListened" | "recentlyAdded" | "alphabetically" | "author";
type PlayListContextState = {
    libraryFormat: TLibraryFormat,
    sortingType: TSortingType
}

type PlayListContextActions = {
    type : "toggleLibraryFormat",
    payload: TLibraryFormat
} | {
    type: "toggleSortingType",
    payload: TSortingType
};

type IPlayListContext = {
    state:{
        libraryFormat: TLibraryFormat,
        sortingType: TSortingType
    },
    dispatch: React.Dispatch<PlayListContextActions>
}

export type{
    TLibraryFormat,
    TSortingType,
    IPlayListContext,

    PlayListContextState,
    PlayListContextActions
}