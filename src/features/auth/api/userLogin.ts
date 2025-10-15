import {client} from "../../../shared/api/client.ts";
import {useSessionStore} from "../../../entitites/session";
import type {StateLoginForm} from "../model/types.ts";

export const userLogin = async (payload: StateLoginForm) => {
    const {data, error} = await client.POST("/auth/login", {body: payload})

    if (error) {
        return error
    }

    if(data) {
        useSessionStore.getState().createSession({ active: true, data })
    }
}
