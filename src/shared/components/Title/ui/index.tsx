import { createElement } from "react";
import {cn} from "../../../lib/cn.ts";
import {variantsTitle} from "../model/variants.ts";
import type {TitleProps} from "../model/types.ts";

export const Title = ({ as, children, size, className }: TitleProps) => {
	const buildTitleStyle = cn(variantsTitle({ size }), className);

	return createElement(as, { children, className: buildTitleStyle });
};
