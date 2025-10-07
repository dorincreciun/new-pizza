import {client} from "../../../shared/api/client.ts";
import {useSessionStore} from "../../../entitites/session";

export const logout = async () => {
    const {data} = await client.POST("/auth/logout")

    if(data) {
        useSessionStore.getState().clearSession()
    }
}
