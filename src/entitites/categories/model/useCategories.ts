import type {CategoryType, ResponseError} from "./types.ts";
import {useEffect, useState} from "react";
import {client} from "../../../shared/api/client.ts";

export const useCategories = () => {
    const [categories, setCategories] = useState<CategoryType[]>([])
    const [error, setError] = useState<ResponseError | null>(null)

    useEffect(() => {
        void (async () => {
            const { data, error } = await client.GET("/categories");

            if (error) {
                setError(error);
                setCategories([]);
            } else {
                setCategories(data?.data ?? []);
            }
        })();
    }, [])

    return [categories, error] as const
}