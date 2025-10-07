import {client} from "../../../shared/api/client.ts";
import type {RegisterBody, RegisterError} from "../model/types.ts";
import {useSessionStore} from "../../../entitites/session";

export const register = async (payload: RegisterBody): Promise<void | RegisterError> => {
    const {data, error} = await client.POST("/auth/register", {body: payload})

    if(error) {
        return error as RegisterError
    }

    if(data.user) {
        useSessionStore.getState().setSession({
            active: true,
            email: data.user.email,
            name: data.user.name
        })
    }
}
