export interface AuthModalStore {
    isOpen: boolean;
    close: () => void;
    open: () => void;
    toggle: () => void;
}