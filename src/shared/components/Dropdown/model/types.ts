import type {
    ButtonHTMLAttributes,
    ComponentType,
    FC,
    ReactElement,
    ReactNode,
} from "react";

export interface ContextDropdownType {
    isOpened: boolean;
    toggle: () => void;
    onChanged?: () => void;
}

export type DropdownToggleProps = ButtonHTMLAttributes<HTMLButtonElement>;

export interface DropdownBodyProps {
    children: ReactNode;
    className?: string;
}

export interface DropdownProps {
    className?: string;
    children: [
        ReactElement<DropdownToggleProps, ComponentType<DropdownToggleProps>>,
        ReactElement<DropdownBodyProps, ComponentType<DropdownBodyProps>>
    ];
}

export type DropdownToggleComponent = FC<DropdownToggleProps>;
export type DropdownBodyComponent = FC<DropdownBodyProps>;

export type DropdownCompoundComponent = FC<DropdownProps> & {
    Toggle: DropdownToggleComponent;
    Body: DropdownBodyComponent;
};
