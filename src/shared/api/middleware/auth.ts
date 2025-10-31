import type {Middleware} from "openapi-fetch";

export const auth: Middleware = {
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