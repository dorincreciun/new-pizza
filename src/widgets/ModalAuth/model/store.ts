import {create} from "zustand/react";
import type {AuthModalState} from "./types.ts";

export const useAuthModalStore = create<AuthModalState>()((set) => ({
    open: false,
    view: "login",
    onClose: () => set({open: false}),
    onOpen: (view: "login" | "register") => set({open: true, view}),
}));