import {create} from "zustand/react";
import type {SessionStore} from "../types/session-store.ts";

export const useSessionStore = create<SessionStore>()((set) => ({
    active: false,
    data: null,

    createSession: (data) => set({active: true, data}),
    destroySession: () => set({active: false, data: null})
}))