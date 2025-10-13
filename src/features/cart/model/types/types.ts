export interface Cart {
    active: boolean;
    items: any[];
    total: number;

    open: () => void;
    close: () => void;
    init: () => void;
}