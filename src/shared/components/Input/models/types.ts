/* Input */
import type {inputVariants} from "../styles/variants.ts";
import type { VariantProps } from "class-variance-authority";
import type {FC, InputHTMLAttributes, Ref} from "react";

type InputVariants = VariantProps<typeof inputVariants>["variant"];
type InputSizes = VariantProps<typeof inputVariants>["size"];

type InputCustomProps = {
    variant: InputVariants;
    size: InputSizes;
    ref?: Ref<HTMLInputElement>;
};

export type InputProps = FC<
    InputCustomProps &
    Omit<InputHTMLAttributes<HTMLInputElement>, "size">
>;