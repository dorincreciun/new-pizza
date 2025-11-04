import {type FC, useId} from "react";
import type { RadioProps } from "../model/types";
import {cn} from "../../../lib/cn.ts";

export const Radio: FC<RadioProps> = ({ id, label, className, ...props }) => {
	const genId = useId()
	return (
		<label
			htmlFor={id ?? genId}
			className={cn(
				"group inline-flex cursor-pointer items-center gap-2 select-none",
				"animate-fade-in",
				className
			)}
		>
			<input id={id ?? genId} type="radio" className="peer sr-only" {...props} />

			<span
				className={cn(
					"relative inline-flex h-5 w-5 items-center justify-center rounded-full",
					"border-neutral bg-surface border",
					"transition-[border-color,transform] duration-200 ease-out",
					"group-hover:border-muted active:scale-95",
					"peer-checked:border-primary",
					"peer-focus-visible:ring-primary peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:outline-none"
				)}
			>
				<span
					className={cn(
						"bg-primary absolute h-2 w-2 rounded-full",
						"scale-50 opacity-0",
						"transition-[opacity,transform] duration-200 ease-out",
						"peer-checked:scale-100 peer-checked:opacity-100"
					)}
				/>
			</span>

			<span className="text-base text-black">{label}</span>
		</label>
	);
};
