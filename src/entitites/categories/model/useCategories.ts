import type {CategoryType} from "./types.ts";
import {useEffect, useState} from "react";
import {client} from "../../../shared/api/client.ts";
import type {ResponseError} from "../../../shared/types/global";

export const useCategories = () => {
    const [categories, setCategories] = useState<CategoryType[]>([])
    const [error, setError] = useState<ResponseError | null>(null)

    useEffect(() => {
        void (async () => {
            const { data, error } = await client.GET("/categories");
            console.log(data)

            if (error) {
                setError(error);
                setCategories([]);
            } else {
                setCategories(data.items ?? []);
            }
        })();
    }, [])

    return [categories, error] as const
}