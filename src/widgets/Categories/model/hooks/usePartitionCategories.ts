import {useMemo} from "react";
import type {CategoryType} from "../../../../entitites/categories";

export const usePartitionCategories = (
    categories: CategoryType[] | undefined,
    maxVisible: number
) => {

    const defaultAllCategory: CategoryType = {
        id: Math.random(),
        name: "Toate",
        slug: ""
    }

    return useMemo(() => {
        const list = Array.isArray(categories) ? categories : [];

        const withAll = [defaultAllCategory, ...list];

        const visible =
            maxVisible > 0 ? withAll.slice(0, maxVisible) : [];

        const invisible =
            maxVisible > 0 ? withAll.slice(maxVisible) : withAll;

        return {visible, invisible};
    }, [categories, maxVisible, defaultAllCategory]);
};
