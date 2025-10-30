import {DropdownContext} from "../model/context.ts";
import {useEffect, useRef, useState} from "react";
import type {DropdownCompoundedProps} from "../model/types.ts";
import {cn} from "../../../lib/cn.ts";
import {DropdownButton} from "./DropdownButton.tsx";
import {DropdownBody} from "./DropdownBody.tsx";

export const Dropdown: DropdownCompoundedProps = ({disabled, closeOnOutsideClick, children}) => {
    const ref = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState(false)

    /* Actions */
    const onToggle = () => setOpen((prev) => !prev)

    useEffect(() => {

        if (closeOnOutsideClick || disabled) return

        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };

    }, [])

    return (
        <DropdownContext value={{open, onToggle}}>
            <div
                ref={ref}
                aria-disabled={disabled}
                className={cn(
                    "relative select-none",
                    disabled
                        ? "opacity-50 cursor-not-allowed pointer-events-none"
                        : "cursor-pointer"
                )}
            >
                {children}
            </div>
        </DropdownContext>
    )
}

Dropdown.displayName = "Dropdown";

/* Compound parts */
Dropdown.Button = DropdownButton;
Dropdown.Body = DropdownBody;