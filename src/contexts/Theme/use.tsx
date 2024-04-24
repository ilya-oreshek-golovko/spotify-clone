import { useContext } from "react";
import ThemeContext from "./context";

export function useThemeActions(){
    const contextVal = useContext(ThemeContext);

    return contextVal.actions
}

export function useThemeState(){
    const contextVal = useContext(ThemeContext);

    return contextVal.state
}