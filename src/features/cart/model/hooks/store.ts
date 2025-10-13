import {create} from "zustand/react";
import type {Cart} from "../types/types.ts";

export const useCartStore = create<Cart>()((set) => ({
    active: false,
    items: [],
    total: 0,

    open: () => set({active: true}),
    close: () => set({active: false}),
    init: () => {},
}))