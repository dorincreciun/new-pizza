import { createContext } from "react";
import type { ContextDropdownType } from "./types";

export const ContextDropdown = createContext<ContextDropdownType>({
	isOpened: false,
	toggle: () => {},
});
