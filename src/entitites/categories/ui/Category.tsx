import { cn } from "../../../shared/lib/cn.ts";
import { NavLink } from "react-router";
import type { FC } from "react";
import type { CategoryType } from "../model/types.ts";

interface CategoryProps extends Pick<CategoryType, "name" | "slug"> {
    onClick?: () => void;
}

export const Category: FC<CategoryProps> = ({ name, slug, onClick }) => {
    return (
        <NavLink
            to={slug ?? name}
            onClick={onClick}
            className={({ isActive }) =>
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
};
