import { useState, useCallback } from "react";
import { DropdownBody } from "../ui/DropdownBody";
import { ContextDropdown } from "./ContextDropdown";
import type {DropdownCompoundComponent} from "./types.ts";
import {DropdownToggle} from "../ui/DropdownToggle.tsx";

export const Dropdown: DropdownCompoundComponent = ({ children }) => {
	const [isOpened, setIsOpened] = useState(false);
	const toggle = useCallback(() => setIsOpened((prev) => !prev), []);

	return (
		<ContextDropdown.Provider value={{ isOpened, toggle }}>{children}</ContextDropdown.Provider>
	);
};

Dropdown.Toggle = DropdownToggle;
Dropdown.Body = DropdownBody;
