import { cva } from "class-variance-authority";

export const inputVariants = cva(
	[
		"w-full block text-sm",
		"transition-all duration-200 ease-in-out",
		"outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
		"disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-y-0",
		"border border-transparent",
		// semantic state styles (prin group)
		"placeholder:text-muted/50",
		"group-data-[status=error]:!border-danger",
	],
	{
		variants: {
			variant: {
				primary: "bg-surface",
				secondary: "bg-transparent border border-neutral",
			},
			size: {
				small: "py-2 px-3 rounded-lg",
				medium: "py-3 px-3.5 rounded-xl",
				large: "py-3 px-4 rounded-2xl",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "medium",
		},
	}
);
