import {client} from "../../../shared/api/client.ts";
import type {MeResponse} from "../model/types.ts";

export const getMeSession = async (): Promise<MeResponse['user'] | null> => {
    const {data, error} = await client.GET("/auth/me")
    if (error) return
    return data.user;
}
