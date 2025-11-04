import type { InputHTMLAttributes } from "react";

export type RadioProps = {
	id?: string;
	label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;
