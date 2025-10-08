import {useReducer} from "react";
import type {IActionRegister, IStoreStateRegister} from "../types";
import {userRegister} from "../../api/userRegister";

const initialState: IStoreStateRegister = {
    name: "",
    email: "",
    password: "",
};

const reducer = (state: IStoreStateRegister, action: IActionRegister): IStoreStateRegister => {
    switch (action.type) {
        case "change-name":
            return { ...state, name: action.payload };
        case "change-email":
            return { ...state, email: action.payload };
        case "change-password":
            return { ...state, password: action.payload };
        case "reset":
            return { name: "", email: "", password: "" };
        default:
            return state;
    }
};

export const useRegisterForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const submit = async () => {
        const {name, email, password} = state
        if(email && password && name) {
            return await userRegister(state)
        }
    }

    return [ state, dispatch, submit ] as const;
}
