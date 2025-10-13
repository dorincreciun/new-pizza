import { cva } from "class-variance-authority";

export const variantsTitle = cva(`font-bold`, {
	variants: {
		size: {
			xs: "text-[16px]",
			sm: "text-[22px]",
			md: "text-[26px]",
			lg: "text-[32px]",
			xl: "text-[36px] font-extrabold",
			"2xl": "text-[40px]",
		},
	},
	defaultVariants: {
		size: "xs",
	},
});
