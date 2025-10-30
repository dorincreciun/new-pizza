import {cn} from "../../../lib/cn.ts";
import {ChevronDown} from "lucide-react";
import {type FC, useContext} from "react";
import {DropdownContext} from "../model/context.ts";
import type {DropdownButtonProps} from "../model/types.ts";

export const DropdownButton: FC<DropdownButtonProps> = ({children, className}) => {
    const {open, onToggle} = useContext(DropdownContext)

    return (
        <button
            onClick={onToggle}
            className={cn(
                "flex items-center gap-2",
                "cursor-pointer rounded-2xl px-6 py-2.5 text-base font-medium",
                "text-text-primary hover:text-primary",
                "select-none",
                className
            )}
        >
            {children}
            <ChevronDown
                size={18}
                aria-hidden="true"
                className={cn(
                    "transition-transform duration-200",
                    open ? "rotate-180" : "rotate-0"
                )}
            />
        </button>
    )
}