import type {Middleware} from "openapi-fetch";
import {useLoaderStore} from "../../components/Loader";

export const loader: Middleware = {
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