import type {paths} from "../types/schema";
import createClient from "openapi-fetch";

/* Middlewares */
import {loader} from "./middleware/loader.ts";
import {auth} from "./middleware/auth.ts";

export const client = createClient<paths>({
    baseUrl: "/api",
});

client.use(auth);
client.use(loader)