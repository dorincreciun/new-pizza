import { cn } from "../../../lib/cn.ts";
import type { HintProps } from "../model/types.ts";

export const Hint: HintProps = ({ children }) => {
    return (
        <span
            className={cn([
                "hidden text-xs overflow-hidden",
                "max-h-0 opacity-0 translate-y-[-4px]",
                "invisible pointer-events-none",
                "transition-all duration-300 ease-out",
                // Starea de eroare animată
                "group-data-[status=error]:visible",
                "group-data-[status=error]:block",
                "group-data-[status=error]:pointer-events-auto",
                "group-data-[status=error]:opacity-100",
                "group-data-[status=error]:translate-y-0",
                "group-data-[status=error]:text-danger",
                "group-data-[status=error]:max-h-100",
            ])}
        >
      {children}
    </span>
    );
};

Hint.displayName = "Hint";
