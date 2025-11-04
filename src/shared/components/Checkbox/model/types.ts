import type { InputHTMLAttributes } from "react";

export type CheckboxProps = {
	id?: string;
	label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;
