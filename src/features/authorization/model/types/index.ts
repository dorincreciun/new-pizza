export type ModalType = "login" | "register" | null;

export interface AuthModalStore {
    current: ModalType;
    open: (type: ModalType) => void;
    close: () => void;
}
