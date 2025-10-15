// src/features/categories-nav/model/useMaxVisible.ts
import { useEffect, useState } from "react";
import {computeMaxVisibleByWidth} from "../../config/breakpoints.ts";

export const useMaxVisible = (): number => {
    const [maxVisible, setMaxVisible] = useState<number>(() => {
        if (typeof window === "undefined") return 5;
        return computeMaxVisibleByWidth(window.innerWidth);
    });

    useEffect(() => {
        const handler = () => {
            setMaxVisible(computeMaxVisibleByWidth(window.innerWidth));
        };
        handler();
        window.addEventListener("resize", handler, { passive: true });
        return () => window.removeEventListener("resize", handler);
    }, []);

    return maxVisible;
};
