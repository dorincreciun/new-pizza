import type {Middleware} from "openapi-fetch";
import {useLoaderStore} from "../components/Loader";

export const authMiddleware: Middleware = {
    async onRequest({request}) {
        return new Request(request, { credentials: "include" })
    },

    async onResponse({ request, response }) {
        const url = new URL(request.url);
        const isRefreshEndpoint = url.pathname.endsWith("/auth/refresh");

        if (response.status !== 401 || isRefreshEndpoint) {
            /*
            * Daca status nu e 401 sau nu am /auth/refresh
            * returnam
            * */
            return response;
        }

        const refresh = await fetch("/api/auth/refresh", { credentials: "include", method: "POST" })

        if(refresh.ok){
            /*
            * Daca refreshToken mai este valid
            * mai executam o data request
            * */
            return fetch(request.clone())
        }

        return response
    }
};

export const loaderMiddleware: Middleware = {
    async onRequest() {
        useLoaderStore.getState().startLoading()
    },

    async onResponse({response}) {
        useLoaderStore.getState().stopLoading()
        return response
    },

    async onError({error}) {
        useLoaderStore.getState().stopLoading()
        throw error
    }
}