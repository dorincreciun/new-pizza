import {cn} from "../../../shared/lib/cn.ts";
import {Category, type CategoryType, useCategories} from "../../../entitites/categories";
import {useMaxVisible} from "../model/hooks/useMaxVisible.ts";
import {usePartitionCategories} from "../model/hooks/usePartitionCategories.ts";
import {CategoryDropdown} from "../../../features/category-dropdown";

export const Categories = () => {
    const {data} = useCategories();

    const maxVisible = useMaxVisible();
    const {visible, invisible} = usePartitionCategories(data, maxVisible);

    if (!Array.isArray(data) || data.length === 0) {
        return null;
    }

    return (
        <nav
            className={cn(
                "bg-surface relative flex items-center gap-2 rounded-2xl px-2 py-1.5 select-none max-w-max",
                "focus-within:ring-2 focus-within:ring-gray-400/10",
                "transition-all duration-200 ease-in-out",
            )}
        >
            {visible.map((props: CategoryType) => <Category key={props.id} {...props} />)}
            <CategoryDropdown invisible={invisible} />
        </nav>
    )
}