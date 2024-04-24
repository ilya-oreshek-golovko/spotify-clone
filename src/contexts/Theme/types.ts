
type Themes = "light-mode" | "dark-mode";
interface IThemeContext {
    state:{
        theme : Themes
    },
    actions:{
        toggleTheme: () => void
    }
}

export type {
    Themes, IThemeContext
}