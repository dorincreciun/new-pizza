import {cn} from "../../../shared/lib/cn.ts";
import {type Category, useCategories} from "../../../entitites/categories";
import {NavLink} from "react-router";
import {useRef, useState} from "react";

export const Categories = () => {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const childRef = useRef<Map<string, HTMLAnchorElement | null>>(new Map());

    const [visibleChilds, setVisibleChilds] = useState<string[]>([]);
    const [invisibleChilds, setInvisibleChilds] = useState<string[]>([]);

    console.dir(childRef);

    const [categories, error] = useCategories();

    if (error || categories.length === 0) return null;


    /* Calculam lungimea children-urilor */
    const calculateChildrenWidth = (children: Iterable<HTMLElement | null>) => {
        let totalWidth = 0;

        if(!Array.isArray(children)) return

        for (const child of children) {
            totalWidth += child.offsetWidth;
        }
        return totalWidth;
    };

    /* Setam ref-urile la elementele children */
    const setRef = (name: string, el: HTMLAnchorElement | null) => {
        if (el) {
            childRef.current.set(name, el);
        } else {
            childRef.current.delete(name);
        }
    }

    return (
        <nav
            ref={parentRef}
            className={cn(
                "bg-surface relative flex rounded-2xl px-2 py-1.5 select-none max-w-max",
                "focus-within:ring-2 focus-within:ring-gray-400/10",
                "transition-all duration-200 ease-in-out"
            )}
        >
            {/* All */}
            <NavLink
                to="/"
                ref={(el) => setRef("all", el)}
                className={({isActive}) =>
                    cn(
                        "cursor-pointer rounded-2xl px-6 py-2.5 text-base font-medium",
                        "transition-all duration-300 ease-out",
                        isActive
                            ? "text-primary bg-white shadow-[0_14px_20px_rgba(0,0,0,0.05)]"
                            : "hover:text-primary text-text-primary"
                    )
                }
            >
                Toate
            </NavLink>

            {/* Api */}
            {categories.map((category: Category) => {
                const {id, name} = category;
                return (
                    <NavLink
                        key={id ?? name}
                        to={`/${name.toLowerCase()}`}
                        ref={(el) => setRef(name, el)}
                        className={({isActive}) =>
                            cn(
                                "cursor-pointer rounded-2xl px-6 py-2.5 text-base font-medium",
                                "transition-all duration-300 ease-out",
                                isActive
                                    ? "text-primary bg-white shadow-[0_14px_20px_rgba(0,0,0,0.05)]"
                                    : "hover:text-primary text-text-primary"
                            )
                        }
                    >
                        {name}
                    </NavLink>
                )
            })}
        </nav>
    );
};
