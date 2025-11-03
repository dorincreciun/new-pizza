import type {AuthModalStore} from "../types";
import {create} from "zustand/react";

export const useAuthModalStore = create<AuthModalStore>()((set) => ({
    current: null,

    open: (modal) => set({ current: modal}),
    close: () => set({ current: null}),
}))