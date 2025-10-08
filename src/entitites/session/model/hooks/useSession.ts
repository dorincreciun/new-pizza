import type {SessionStore} from "../types/types.ts";
import {create} from "zustand/react";
import {client} from "../../../../shared/api/client.ts";

export const useSessionStore = create<SessionStore>((set) => {
    return {
        isLoading: true,
        active: false,
        data: null,

        initSession: async () => {
            try {
                const {data, error } = await client.GET("/auth/me")

                if(error) return

                if(data) {
                    set({isLoading: true, active: true, data})
                }

            } finally {
                set({isLoading: false})
            }
        },

        createSession: (data) => set(data),

        destroySession: () => set({active: false, data: null}),
    }
})

