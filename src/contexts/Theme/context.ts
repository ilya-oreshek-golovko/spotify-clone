import { createContext } from "react";
import { IThemeContext } from "./types";

const initialValue : IThemeContext = {
    state: {
        theme : "dark-mode"
    }, 
    actions : {
        toggleTheme: () => {}
    }
}
const ThemeContext = createContext(initialValue);

export default ThemeContext;