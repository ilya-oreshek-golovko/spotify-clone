type TLibraryFormat = "grid" | "compact" | "standard";
type IPlayListContext = {
    state:{
        libraryFormat: TLibraryFormat
    },
    actions:{
        setLibraryFormat: (newFormat : TLibraryFormat) => void
    }
}

export type{
    TLibraryFormat,
    IPlayListContext
}