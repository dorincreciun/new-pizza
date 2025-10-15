import type {
    ButtonHTMLAttributes,
    ComponentType,
    FC,
    ReactElement,
    ReactNode,
} from "react";

export type DropdownToggleProps = ButtonHTMLAttributes<HTMLButtonElement>;

export interface DropdownBodyProps {
    children: ReactNode;
}

export interface DropdownProps {
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
