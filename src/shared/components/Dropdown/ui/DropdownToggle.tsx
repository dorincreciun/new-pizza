import type {DropdownToggleComponent} from "../model/types.ts";
import {useContext} from "react";
import {ContextDropdown} from "../model/ContextDropdown.ts";

export const DropdownToggle: DropdownToggleComponent = ({children, ...rest}) => {
    const { toggle } = useContext(ContextDropdown);

    return <button onClick={toggle} {...rest}>{children}</button>
}