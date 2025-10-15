import type {DropdownCompoundComponent} from "../model/types.ts";
import {DropdownToggle} from "./DropdownToggle.tsx";
import {DropdownBody} from "./DropdownBody.tsx";
import {useCallback, useState} from "react";
import {ContextDropdown} from "../model/ContextDropdown.ts";
import {cn} from "../../../lib/cn.ts";

export const Dropdown: DropdownCompoundComponent = ({children, className}) => {
    const [isOpened, setIsOpened] = useState(false);
    const toggle = useCallback(() => setIsOpened((prev) => !prev), []);

    return (
        <ContextDropdown.Provider value={{isOpened, toggle}}>
            <div className={cn("relative", className)}>{children}</div>
        </ContextDropdown.Provider>
    )
}

Dropdown.Toggle = DropdownToggle
Dropdown.Body = DropdownBody
