import {cn} from "../../../lib/cn.ts";
import {type FC, useContext} from "react";
import {DropdownContext} from "../model/context.ts";
import type {DropdownBodyProps} from "../model/types.ts";

export const DropdownBody: FC<DropdownBodyProps> = ({children}) => {
    const {open} = useContext(DropdownContext)
    return (
        <div
            className={cn(
                "absolute -right-2 mt-4 z-50",
                "bg-surface rounded-2xl px-3 py-2",
                "transition-all duration-200 origin-top",
                "group-focus-within:ring-2 group-focus-within:ring-gray-400/10",
                open
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-2 scale-95 pointer-events-none"
            )}
        >
            <div className="flex flex-col gap-2">
                {children}
            </div>
        </div>
    )
}