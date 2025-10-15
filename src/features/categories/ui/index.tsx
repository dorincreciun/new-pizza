import {useRef} from "react";
import {NavLink} from "react-router";
import {cn} from "../../../shared/lib/cn.ts";
import {type Category, useCategories} from "../../../entitites/categories";
import {useMaxVisible} from "../model/hooks/useMaxVisible.ts";
import {usePartitionCategories} from "../model/hooks/usePartitionCategories.ts";
import {Dropdown} from "../../../shared/components/Dropdown";
import {ChevronDown} from "lucide-react";

export const Categories = () => {
    const [categories] = useCategories();

    const categoryNav = useRef<HTMLDivElement | null>(null);
    const categoryElements = useRef<Map<string, number>>(new Map());

    const maxVisible = useMaxVisible();
    const {visible, invisible} = usePartitionCategories(categories, maxVisible);

    if (!Array.isArray(categories) || categories.length === 0) {
        return null;
    }

    return (
        <nav
            ref={categoryNav}
            className={cn(
                "bg-surface relative flex items-center gap-2 rounded-2xl px-2 py-1.5 select-none max-w-max",
                "focus-within:ring-2 focus-within:ring-gray-400/10",
                "transition-all duration-200 ease-in-out",
            )}
        >
            {/* Tab-urile vizibile */}
            {visible.map((category: Category) => {
                const {id, name} = category;
                return (
                    <NavLink
                        ref={(el) => {
                            if (el) categoryElements.current.set(name, el.clientWidth);
                        }}
                        key={id ?? name}
                        to={name}
                        className={({isActive}) =>
                            cn(
                                "cursor-pointer rounded-2xl px-6 py-2.5 text-base font-medium whitespace-nowrap",
                                "transition-all duration-300 ease-out",
                                isActive
                                    ? "text-primary bg-white shadow-[0_14px_20px_rgba(0,0,0,0.05)]"
                                    : "hover:text-primary text-text-primary"
                            )
                        }
                    >
                        {name}
                    </NavLink>
                );
            })}

            {/* Dropdown pentru cele invizibile (sau toate pe mobil) */}
            {
                invisible.length > 0 && (
                    <Dropdown>
                        <Dropdown.Toggle className={"px-6 py-2.5 flex items-center gap-2"}>
                            Show More
                            <ChevronDown />
                        </Dropdown.Toggle>
                        <Dropdown.Body>
                            {invisible.map((category: Category) => {
                                const {id, name} = category;
                                return (
                                    <NavLink
                                        to={name}
                                        key={id ?? name}
                                        className={({isActive}) =>
                                            cn(
                                                "cursor-pointer rounded-2xl px-6 py-2.5 text-base font-medium whitespace-nowrap",
                                                "transition-all duration-300 ease-out",
                                                isActive
                                                    ? "text-primary bg-white shadow-[0_14px_20px_rgba(0,0,0,0.05)]"
                                                    : "hover:text-primary text-text-primary"
                                            )
                                        }
                                    >
                                        {name}
                                    </NavLink>
                                );
                            })}
                        </Dropdown.Body>
                    </Dropdown>
                )
            }
        </nav>
    );
};
