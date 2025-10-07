import {client} from "../../../shared/api/client.ts";
import type {MeError, MeResponse} from "../model/types.ts";

export const getMeSession = async (): Promise<MeResponse['user'] | MeError> => {
    const {data, error} = await client.GET("/auth/me")

    if (error) {
        return error as MeError;
    }
    return data.user;
}