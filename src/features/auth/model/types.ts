import type {paths} from "../../../shared/api/schema";

export type LoginBody = paths["/auth/login"]['post']['requestBody']['content']['application/json']
export type LoginResponse = paths["/auth/login"]['post']['responses']['200']['content']['application/json']
export type LoginError = paths["/auth/login"]['post']['responses']['401']['content']['application/json']