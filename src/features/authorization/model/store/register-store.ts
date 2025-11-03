import {create} from "zustand/react";
import type {AuthModalStore} from "../types/store.ts";

export const useRegisterModal = create<AuthModalStore>()((set, get) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
    toggle: () => set({isOpen: !get().isOpen}),
}))