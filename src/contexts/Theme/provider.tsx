import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import ThemeContext from "./context"
import { Themes } from "./types";

const ThemeProvider = ({children} : {children : any}) => {

    const THEME_KEY = useMemo(() => "GIV-SPOTIFY-MODE", []);
    const initialValue = function() : Themes{
        return localStorage.getItem(THEME_KEY) as Themes || "dark-mode";
    };

    const [theme, setTheme] = useState<Themes>(initialValue);

    const providerValue = {
        state:{
            theme
        },
        actions:{
            toggleTheme : () => {
                setTheme((prevTheme) => prevTheme == "light-mode" ? "dark-mode" : "light-mode");
            }
        }
    }

    useLayoutEffect(() => {
        localStorage.setItem(THEME_KEY, theme);
        if(theme == "light-mode"){
            document.documentElement.classList.remove("dark-mode");
            document.documentElement.classList.add("light-mode");
        }else{
            document.documentElement.classList.remove("light-mode");
            document.documentElement.classList.add("dark-mode");
        }

    }, [theme]);
    // useEffect(() => {
    //     localStorage.setItem(THEME_KEY, theme);
    // }, [theme]);

    return(
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export{
    ThemeProvider
}