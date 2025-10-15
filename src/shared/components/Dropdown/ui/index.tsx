import type {DropdownCompoundComponent} from "../model/types.ts";
import {DropdownToggle} from "./DropdownToggle.tsx";
import {DropdownBody} from "./DropdownBody.tsx";
import {useCallback, useState} from "react";
import {ContextDropdown} from "../model/ContextDropdown.ts";

export const Dropdown: DropdownCompoundComponent = ({children}) => {
    const [isOpened, setIsOpened] = useState(false);
    const toggle = useCallback(() => setIsOpened((prev) => !prev), []);

    return (
        <ContextDropdown.Provider value={{isOpened, toggle}}>
            <div className={"relative"}>{children}</div>
        </ContextDropdown.Provider>
    )
}

Dropdown.Toggle = DropdownToggle
Dropdown.Body = DropdownBody