import type {InputProps} from "../models/types";
import {inputVariants} from "../styles/variants";
import {cn} from "../../../lib/cn";

export const Input: InputProps = ({variant, size, className, ...rest}) => {
    return (
        <input
            className={cn(
                inputVariants({variant, size}),
                className
            )}
            {...rest}
        />
    );
};

Input.displayName = "Input";