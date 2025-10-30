import type { FC, ReactElement, ReactNode } from "react";

/**
 * ====================================================================================================================
 * Dropdown Context Type
 * ====================================================================================================================
 * @description
 * Provides shared state and actions for Dropdown compound components.
 * Components like <Dropdown.Button> and <Dropdown.Body> consume this context.
 * @since 1.0.0
 */
export interface DropdownContextType {
    /**
     * Indicates whether the dropdown is currently open (visible) or closed.
     * @example
     * if (open) { renderMenu(); }
     */
    open: boolean;

    /**
     * Toggles the open state of the dropdown.
     * Can be triggered by button clicks or keyboard interactions.
     * @example
     * onToggle(); // opens if closed, closes if open
     */
    onToggle: () => void;
}

/**
 * ====================================================================================================================
 * Dropdown Props
 * ====================================================================================================================
 * @description
 * Public props for the root <Dropdown> component.
 * Exposes basic behavior flags and enforces the compound children order:
 * [<Dropdown.Button />, <Dropdown.Body />].
 * @since 1.0.0
 */
export interface DropdownProps {
    /**
     * When true, the dropdown is visually and interactively disabled.
     * Consumers should render the component as non-interactive (e.g., dimmed styles, no pointer events).
     * @default false
     */
    disabled?: boolean;

    /**
     * When true, clicking outside the dropdown should close it.
     * The actual behavior is implemented in the component logic; this flag only expresses intent.
     * @default true
     */
    closeOnOutsideClick?: boolean;

    /**
     * Tuple of compound children in strict order:
     * 1) <Dropdown.Button />
     * 2) <Dropdown.Body />
     *
     * Declared as readonly to prevent accidental mutation.
     */
    children: readonly [
        ReactElement<DropdownButtonProps>,
        ReactElement<DropdownBodyProps>
    ];
}

/**
 * ====================================================================================================================
 * Dropdown.Button Props
 * ====================================================================================================================
 * @description
 * Props for the <Dropdown.Button> compound component.
 * This is typically the control that toggles the dropdown open/closed state.
 * @since 1.0.0
 */
export interface DropdownButtonProps {
    /**
     * Button content (text, icon, or any custom node).
     */
    children: ReactNode;

    /**
     * Optional className to customize styling of the button container.
     */
    className?: string;
}

/**
 * ====================================================================================================================
 * Dropdown.Body Props
 * ====================================================================================================================
 * @description
 * Props for the <Dropdown.Body> compound component.
 * This is the container that renders the dropdown menu/content.
 * @since 1.0.0
 */
export interface DropdownBodyProps {
    /**
     * Body content (menu items, custom nodes, etc.).
     * Consumers may implement their own selectable items inside.
     */
    children: ReactNode;
}

/**
 * ====================================================================================================================
 * Dropdown Compounded Type
 * ====================================================================================================================
 * @description
 * The <Dropdown> component type that also exposes its compound parts as static members:
 * - Dropdown.Button
 * - Dropdown.Body
 *
 * This pattern enables:
 * <Dropdown>
 *   <Dropdown.Button>Toggle</Dropdown.Button>
 *   <Dropdown.Body>...</Dropdown.Body>
 * </Dropdown>
 *
 * @since 1.0.0
 */
export interface DropdownCompoundedProps extends FC<DropdownProps> {
    /**
     * Compound trigger/control element.
     */
    Button: FC<DropdownButtonProps>;

    /**
     * Compound body/content element.
     */
    Body: FC<DropdownBodyProps>;
}
