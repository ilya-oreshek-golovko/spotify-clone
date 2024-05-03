import { useEffect, useRef, useState } from "react";
import Dropdown from "@home-leftpanel/modules/MediaLibrary/components/Dropdown";

function useDrowdown(){
    const [dropdown, toggleDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const closeDropdown = (evt : MouseEvent) => {
    //         if(dropdown && evt.target != dropdownRef.current && evt.target != dropdownRef.current!.children[0]){
    //             toggleDropdown(false);
    //         }
    //     }
    //     document.addEventListener("mousedown", closeDropdown);
    //     return () => document.removeEventListener("mousedown", closeDropdown);
    // }, [dropdown]);

    const handleDropdown = (e : any) => {
        e.stopPropagation();
        console.log("Test: ", dropdown);
        toggleDropdown((prevState) => !prevState);
    }

    const ShowDropdown = () => {
        return(
            dropdown ? <Dropdown /> : null
        );
    }

    return{
        handleDropdown,
        ShowDropdown,
        dropdownRef
    };
}

export{
    useDrowdown
}