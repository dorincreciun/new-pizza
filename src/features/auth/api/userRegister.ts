import {client} from "../../../shared/api/client.ts";
import type {StateRegisterForm} from "../model/types.ts";
import {useSessionStore} from "../../../entitites/session";

export const userRegister = async (payload: StateRegisterForm) => {
    const {data, error} = await client.POST("/auth/register", {body: payload})

    if (error) {
        return error
    }

    if (data) {
        useSessionStore.getState().createSession({active: true, data})
    }
}
