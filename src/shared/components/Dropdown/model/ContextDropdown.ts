import { createContext } from "react";
import type {ContextDropdownType} from "./types.ts";

export const ContextDropdown = createContext<ContextDropdownType>({
	isOpened: false,
	toggle: () => {},
});
