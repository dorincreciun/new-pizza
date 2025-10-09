export interface StateLoginForm {
    email: string;
    password: string;
}

export interface StateRegisterForm {
    name: string;
    email: string;
    password: string;
}

export type ActionLoginForm =
    | { type: "change-email"; email: string }
    | { type: "change-password"; password: string };

export type ActionRegisterForm =
    | { type: "change-name"; name: string }
    | { type: "change-email"; email: string }
    | { type: "change-password"; password: string };


export type UseLoginFormReturn = [
    StateLoginForm,
    React.Dispatch<ActionLoginForm>,
    () => Promise<void>,
    boolean,
    string[]
];

export type UseRegisterFormReturn = [
    StateRegisterForm,
    React.Dispatch<ActionRegisterForm>,
    () => Promise<void>,
    boolean,
    string[]
];
