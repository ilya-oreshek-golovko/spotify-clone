import { useEffect, useRef, useState } from "react";
import Dropdown from "@home-leftpanel/modules/MediaLibrary/components/Dropdown";

function useDrowdown(){
    const [dropdown, toggleDropdown] = useState(false);
    const toggleBtnRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const closeDropdown = (evt : any) => {
            //console.log(toggleBtnRef.current!.children);

            if(toggleBtnRef.current?.contains(evt.target)){
                toggleDropdown((prevState) => !prevState);
            }else if(dropdown && !dropdownRef.current?.contains(evt.target)){
                console.log("test 1");
                toggleDropdown(false);
            }
        }
        document.addEventListener("mousedown", closeDropdown);
        return () => document.removeEventListener("mousedown", closeDropdown);
    }, [dropdown]);

    const ShowDropdown = () => {
        return(
            dropdown ? <Dropdown ref={dropdownRef}/> : null
        );
    }

    return{
        ShowDropdown,
        toggleBtnRef
    };
}

export{
    useDrowdown
}