import type { LabelProps } from "../model/types.ts";
import {cn} from "../../../lib/cn.ts";

export const Label: LabelProps = ({ children, className, ...rest }) => {
    return (
        <label
            className={cn(
                [
                    "group-data-[status=error]:text-danger group-data-[status=success]:text-success font-medium text-black text-sm",
                ],
                className
            )}
            {...rest}
        >
            {children}
        </label>
    );
};

Label.displayName = "Label";
