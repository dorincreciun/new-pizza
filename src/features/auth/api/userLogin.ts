import {client} from "../../../shared/api/client.ts";
import type {LoginBody, LoginError} from "../model/types.ts";
import {useSessionStore} from "../../../entitites/session";

export const userLogin = async (payload: LoginBody): Promise<void | LoginError> => {
    const {data, error} = await client.POST("/auth/login", {body: payload})

    if (error) {
        return error as LoginError;
    }

    if(data) {
        useSessionStore.getState().createSession({ active: true, data })
    }
}
