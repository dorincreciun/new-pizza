import type {AuthModalStore} from "../types/store.ts";
import {create} from "zustand/react";

export const useLoginModal = create<AuthModalStore>()((set, get) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
    toggle: () => set({isOpen: !get().isOpen}),
}))