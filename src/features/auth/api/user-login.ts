import {client} from "../../../shared/api/client.ts";
import {useSessionStore} from "../../../entitites/session";
import type {StateLoginForm} from "../model/types.ts";

export const userLogin = async (payload: StateLoginForm) => {
    const {data, error} = await client.POST("/auth/login", {body: payload})

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
}
