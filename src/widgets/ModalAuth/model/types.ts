export interface AuthModalState {
    open: boolean;
    onClose: () => void;
    onOpen: (view: "login" | "register") => void;
    view: "login" | "register"
}