import type {SessionStore} from "./types.ts";
import {create} from "zustand/react";
import {getMeSession} from "../api/getMeSession.ts";

export const useSessionStore = create<SessionStore>((set) => {
    return {
        active: false,
        email: null,
        name: null,

        setSession: (session): void => set(session),

        clearSession: (): void => set({
            active: false,
            email: null,
            name: null,
        }),

        initSession: async (): Promise<void> => {
            try {
                const session = await getMeSession()
                if(session) {
                    set({
                        active: true,
                        email: session.email,
                        name: session.name
                    })
                }


            } catch (e) {
                console.error(e)
            }
        },

    }
})

