import {useEffect, useRef, useState} from "react";
import {ChevronDown} from "lucide-react";
import {Category, type CategoryType} from "../../../entitites/categories";
import {cn} from "../../../shared/lib/cn.ts";

export const CategoryDropdown = ({invisible}: { invisible: CategoryType[] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };

    }, [])

    return (
        <div ref={ref} className="relative group">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className={cn(
                    "flex items-center gap-2",
                    "cursor-pointer rounded-2xl px-6 py-2.5 text-base font-medium",
                    "text-text-primary hover:text-primary",
                    "select-none"
                )}
            >
                Show More
                <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={cn(
                        "transition-transform duration-200",
                        isOpen ? "rotate-180" : "rotate-0"
                    )}
                />
            </button>

            <div
                className={cn(
                    "absolute -right-2 mt-4 z-50",
                    "bg-surface rounded-2xl px-3 py-2",
                    "transition-all duration-200 origin-top",
                    "group-focus-within:ring-2 group-focus-within:ring-gray-400/10",
                    isOpen
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                )}
            >
                <div className="flex flex-col gap-2">
                    {invisible.map((props: CategoryType) => (
                        <Category
                            key={props.id}
                            onClick={() => setIsOpen(false)}
                            {...props}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
