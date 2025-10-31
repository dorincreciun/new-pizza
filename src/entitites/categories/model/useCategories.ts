import type { CategoryType, UseCategoriesResult } from "./types.ts";
import { useEffect, useState, useCallback } from "react";
import { client } from "../../../shared/api/client.ts";
import type { ResponseError } from "../../../shared/types/global";

export const useCategories = (): UseCategoriesResult => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<CategoryType[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);

            const { data, error } = await client.GET("/categories");

            if (error) {
                const apiError = error as ResponseError;
                const messageFromApi =
                    apiError?.error ??
                    apiError?.details?.[0]?.message ??
                    "Request failed";

                setError(messageFromApi);
                setData([]);
                return;
            }

            setData(data?.items ?? []);
        } catch (e) {
            console.error(e);
            setError(e instanceof Error ? e.message : "Unexpected error");
            setData([]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        void fetchData();
    }, [fetchData]);

    return {
        isLoading,
        data,
        error,
    };
};
