import {useReducer} from "react";
import type {IActionLogin, IStoreStateLogin} from "../types.ts";
import {login} from "../../api/login.ts";

const initialState: IStoreStateLogin = {
    email: "",
    password: "",
};

const reducer = (state: IStoreStateLogin, action: IActionLogin): IStoreStateLogin => {
    switch (action.type) {
        case "change-email":
            return { ...state, email: action.payload };
        case "change-password":
            return { ...state, password: action.payload };
        case "reset":
            return { email: "", password: "" };
        default:
            return state;
    }
};

export const useLoginForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const submit = async () => {
        const {email, password} = state
        if(email && password) {
            await login(state)
        }
    }

    return [
        state,
        dispatch,
        submit
    ] as const;
}
