import {client} from "../../../shared/api/client.ts";
import type {StateRegisterForm} from "../model/types.ts";
import {useSessionStore} from "../../../entitites/session";

export const userRegister = async (payload: StateRegisterForm) => {
    const {data, error} = await client.POST("/auth/register", {body: payload})

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
