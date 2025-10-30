import {createContext} from "react";
import type {DropdownContextType} from "./types.ts";

export const DropdownContext = createContext<DropdownContextType>({
    open: false,

    /* Actions */
    onToggle: () => {},
})