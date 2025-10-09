import {useReducer, useState, type Reducer} from "react";
import {client} from "../../../../shared/api/client.ts";
import type {
    StateLoginForm,
    ActionLoginForm,
    UseLoginFormReturn,
} from "../types";
import {useSessionStore} from "../../../../entitites/session";
import {useNavigate} from "react-router";

const initialState: StateLoginForm = {
    email: "",
    password: "",
};

const reducer: Reducer<StateLoginForm, ActionLoginForm> = (
    state,
    action
): StateLoginForm => {
    switch (action.type) {
        case "change-email":
            return {...state, email: action.email};
        case "change-password":
            return {...state, password: action.password};
        default:
            return state;
    }
};

export const useLoginForm = (): UseLoginFormReturn => {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [errorMessages, setErrorMessages] = useState<string[]>([]);
    const [isError, setIsError] = useState<boolean>(false);
    const createSession = useSessionStore((s) => s.createSession);

    const submit = async () => {
        try {
            if (!state.email || !state.password) {
                setIsError(true);
                setErrorMessages(["Email și parola sunt obligatorii."]);
                return;
            }

            const body = {
                email: state.email,
                password: state.password,
            };

            const {response, data, error} = await client.POST("/auth/login", {
                body,
            });

            if (!response.ok) {
                setIsError(true);
                setErrorMessages(["Autentificarea a eșuat. Verifică datele."]);
                return;
            }

            if (error) {
                setIsError(true);
                if (error.message) setErrorMessages([error.message]);
                return;
            }

            if (data) {
                createSession({active: true, data});
                navigate("/");
            }
        } catch (e) {
            setIsError(true);
            setErrorMessages(["A apărut o eroare neașteptată."]);
            console.error(e);
        }
    };

    return [state, dispatch, submit, isError, errorMessages];
};
