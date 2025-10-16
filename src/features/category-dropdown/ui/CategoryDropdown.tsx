import {ChevronDown} from "lucide-react";
import type {CategoryType} from "../../../entitites/categories";
import {useNavigate} from "react-router";
import {cn} from "../../../shared/lib/cn.ts";

export const CategoryDropdown = ({invisible}: {invisible: any}) => {
    const navigate = useNavigate();
    return (
        <div className="relative">
            <label htmlFor="categories-more" className="sr-only">
                Alte categorii
            </label>

            <select
                id="categories-more"
                value={""}
                onChange={(e) => navigate(e.target.value)}
                className={cn(
                    "appearance-none cursor-pointer rounded-2xl px-6 py-2.5 text-base font-medium",
                    "transition-all duration-300 ease-out",
                    "text-text-primary hover:text-primary bg-white shadow-[0_14px_20px_rgba(0,0,0,0.05)]",
                    "pr-10",
                    "focus:outline-none focus:ring-2 focus:ring-gray-400/10"
                )}
            >
                <option value="">Show More</option>
                {invisible.map((category: CategoryType) => {
                    const { id, name, slug } = category;
                    return (
                        <option
                            key={id ?? name}
                            value={slug ?? name}
                        >
                            {name}
                        </option>
                    );
                })}
            </select>

            {/* Iconița Chevron suprapusă peste select */}
            <ChevronDown
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                size={18}
                aria-hidden="true"
            />
        </div>
    )
}