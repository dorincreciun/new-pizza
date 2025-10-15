import type {DropdownToggleComponent} from "../model/types.ts";
import {useContext} from "react";
import {ContextDropdown} from "../model/ContextDropdown.ts";
import {cn} from "../../../lib/cn.ts";

export const DropdownToggle: DropdownToggleComponent = ({children, className, ...rest}) => {
    const { toggle } = useContext(ContextDropdown);

    return (
        <button
            onClick={toggle}
            className={cn("cursor-pointer", className)}
            {...rest}
        >
            {children}
        </button>
    )
}
