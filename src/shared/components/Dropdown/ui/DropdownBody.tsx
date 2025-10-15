import type { DropdownBodyComponent } from "../model/types";
import { useContext } from "react";
import { ContextDropdown } from "../model/ContextDropdown";
import { cn } from "../../../lib/cn";

export const DropdownBody: DropdownBodyComponent = ({ children }) => {
    const { isOpened } = useContext(ContextDropdown);

    return (
        <div
            className={cn(
                "absolute top-14 -right-2 z-10",
                "bg-surface flex flex-col items-center gap-2 rounded-2xl px-2 py-1.5 select-none max-w-max",
                "focus-within:ring-2 focus-within:ring-gray-400/10",
                "transition-all duration-300 ease-in-out",
                isOpened
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
            )}
        >
            {children}
        </div>
    );
};
