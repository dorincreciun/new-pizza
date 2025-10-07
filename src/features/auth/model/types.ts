import type {paths} from "../../../shared/api/schema";

/* Api types */
export type LoginBody = paths["/auth/login"]['post']['requestBody']['content']['application/json']
export type LoginError = paths["/auth/login"]['post']['responses']['401']['content']['application/json']

export type RegisterBody = paths["/auth/register"]['post']['requestBody']['content']['application/json']
export type RegisterResponse = paths["/auth/register"]['post']['responses']['201']['content']['application/json']
export type RegisterError = paths["/auth/register"]['post']['responses']['400']['content']['application/json']

/* Reducer types / StoreTypes */
type IBaseActionForm =
    | { type: "change-email"; payload: string }
    | { type: "change-password"; payload: string }
    | { type: "reset" };

type IBaseStateStore = {
    email: string;
    password: string;
}

export type IStoreStateLogin = IBaseStateStore

export type IStoreStateRegister = IBaseStateStore & {
    name: string;
}

export type IActionLogin = IBaseActionForm

export type IActionRegister =
    | IBaseActionForm
    | { type: "change-name"; payload: string };
