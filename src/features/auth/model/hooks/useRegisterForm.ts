import {useReducer, useState, type Reducer} from "react";
import {client} from "../../../../shared/api/client.ts";
import type {
    StateRegisterForm,
    ActionRegisterForm,
    UseRegisterFormReturn,
} from "../types";
import {useNavigate} from "react-router";
import {useSessionStore} from "../../../../entitites/session";

const initialState: StateRegisterForm = {
    name: "",
    email: "",
    password: "",
};

const reducer: Reducer<StateRegisterForm, ActionRegisterForm> = (
    state,
    action
): StateRegisterForm => {
    switch (action.type) {
        case "change-name":
            return {...state, name: action.name};
        case "change-email":
            return {...state, email: action.email};
        case "change-password":
            return {...state, password: action.password};
        default:
            return state;
    }
};

export const useRegisterForm = (): UseRegisterFormReturn => {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [errorMessages, setErrorMessages] = useState<string[]>([]);
    const [isError, setIsError] = useState<boolean>(false);
    const createSession = useSessionStore((s) => s.createSession);

    const submit = async () => {
        try {
            if (!state.name || !state.email || !state.password) {
                setIsError(true);
                setErrorMessages(["Toate câmpurile sunt obligatorii."]);
                return;
            }

            const body = {
                name: state.name,
                email: state.email,
                password: state.password,
            };

            const {response, data, error} = await client.POST("/auth/register", {
                body,
            });

            if (!response.ok) {
                setIsError(true);
                setErrorMessages(["Înregistrarea a eșuat. Verifică datele."]);
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
