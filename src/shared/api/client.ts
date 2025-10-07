import type {paths} from "./schema";
import createClient from "openapi-fetch";
import {authMiddleware} from "./middleware.ts";

export const client = createClient<paths>({
    baseUrl: "/api",
});

client.use(authMiddleware);