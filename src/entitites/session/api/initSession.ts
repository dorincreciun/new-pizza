import {client} from "../../../shared/api/client.ts";
import {useSessionStore} from "../model/hooks/useSessionStore.ts";

export const initSession = async (): Promise<void> => {
    try {
        const {data, error} = await client.GET("/auth/me")

        if (error) {
            console.error(error)
            useSessionStore
                .getState()
                .destroySession()
        }

        if (data?.user) {
            useSessionStore
                .getState()
                .createSession(data.user)
        }

    } catch (e) {
        console.error("initSession: ", e)
        useSessionStore
            .getState()
            .destroySession()
    }
}