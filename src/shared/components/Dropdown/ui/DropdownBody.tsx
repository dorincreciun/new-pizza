import type { DropdownBodyComponent } from "../model/types";
import { useContext } from "react";
import { ContextDropdown } from "../model/ContextDropdown";
import { cn } from "../../../lib/cn";

export const DropdownBody: DropdownBodyComponent = ({ children, className }) => {
    const { isOpened } = useContext(ContextDropdown);

    return (
        <div
            className={cn(
                "absolute top-0 right-0 z-10",
                "transition-all duration-300 ease-in-out",
                isOpened
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0",
                className
            )}
        >
            {children}
        </div>
    );
};
