import type { CheckboxProps } from "../model/types";
import type { FC } from "react";
import {cn} from "../../../lib/cn.ts";

export const Checkbox: FC<CheckboxProps> = ({
	id,
	label,
	className,
	...props
}) => {
	return (
		<label
			htmlFor={id}
			className={cn(
				"group inline-flex cursor-pointer items-center gap-2 select-none",
				"animate-fade-in", // folosește animația definită în tailwind.config.js
				className
			)}
		>
			<input
				id={id}
				type="checkbox"
				className="peer sr-only"
				{...props}
			/>

			<span
				className={cn(
					"relative inline-flex h-6 w-6 items-center justify-center rounded-md",
					"border-neutral bg-surface border",
					"transition-[background-color,border-color,transform] duration-200 ease-out",
					"group-hover:border-muted active:scale-95",
					"peer-checked:border-primary peer-checked:bg-primary",
					"peer-checked:[&>svg]:scale-100 peer-checked:[&>svg]:opacity-100",
					"peer-focus-visible:ring-primary peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:outline-none"
				)}
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="white"
					strokeWidth={3}
					strokeLinecap="round"
					strokeLinejoin="round"
					className={cn(
						"pointer-events-none h-3.5 w-3.5",
						"scale-75 opacity-0",
						"transition-[opacity,transform] duration-200 ease-out"
					)}
				>
					<polyline points="20 6 9 17 4 12" />
				</svg>
			</span>

			<span className="text-base text-black">{label}</span>
		</label>
	);
};
