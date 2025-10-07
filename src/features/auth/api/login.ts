import {client} from "../../../shared/api/client.ts";
import type {LoginBody, LoginError, LoginResponse} from "../model/types.ts";

export const login = async (payload: LoginBody): Promise<LoginResponse['user'] | LoginError> => {
    const {data, error} = await client.POST("/auth/login", {body: payload})

    if (error) {
        return error as LoginError;
    }
    return data.user;
}