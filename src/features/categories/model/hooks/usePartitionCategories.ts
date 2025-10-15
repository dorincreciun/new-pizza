import { useMemo } from "react";
import type {Category} from "../../../../entitites/categories";

export const usePartitionCategories = (
    categories: Category[] | undefined,
    maxVisible: number
) => {
    return useMemo(() => {
        const list = Array.isArray(categories) ? categories : [];
        const visible =
            maxVisible > 0 ? list.slice(0, maxVisible) : [];
        const invisible =
            maxVisible > 0 ? list.slice(maxVisible) : list;
        return { visible, invisible };
    }, [categories, maxVisible]);
};
