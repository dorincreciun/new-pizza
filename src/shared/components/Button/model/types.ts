import type { ButtonHTMLAttributes, ReactElement, ReactNode, Ref } from "react";
import type { VariantProps } from "class-variance-authority";
import type {buttonVariants} from "../styles/variants.ts";

export type ButtonSize = NonNullable<
	VariantProps<typeof buttonVariants>["size"]
>;
export type ButtonKind = NonNullable<
	VariantProps<typeof buttonVariants>["kind"]
>;
export type ButtonColor = NonNullable<
	VariantProps<typeof buttonVariants>["color"]
>;

type NativeButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	"children" | "color"
>;

type CommonProps = NativeButtonProps & {
	size?: ButtonSize;
	kind?: ButtonKind;
	color?: ButtonColor;
	loading?: boolean;
	className?: string;
	ref?: Ref<HTMLButtonElement>;
};

export type IconOnlyProps = CommonProps & {
	isOnlyIcon: true;
	["aria-label"]: string;
	children: ReactElement;
};

export type WithContentProps = CommonProps & {
	isOnlyIcon?: false | undefined;
	children: ReactNode;
	["aria-label"]?: string;
};

export type ButtonProps = IconOnlyProps | WithContentProps;
