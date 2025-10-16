import {createContext, useContext} from "react";
import type {IDropDownContext} from "./types.ts";

export const DropdownContext = createContext<IDropDownContext>({})

export const useDropdownContext = () => {
    const ctx = useContext(DropdownContext);
    if (!ctx) throw new Error("Dropdown context used outside provider");
    return ctx;
};