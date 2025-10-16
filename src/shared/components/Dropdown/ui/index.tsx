import {DropdownContext} from "../model/context.ts";
import type {FC} from "react";
import type {IDropdownProps} from "../model/types.ts";
import {DropdownButton} from "./DropdownButton.tsx";
import {DropdownBody} from "./DropdownBody.tsx";

export const Dropdown: FC<IDropdownProps> = ({}) => {
    return (
        <DropdownContext value={{}}>
            <DropdownButton />
            <DropdownBody />
        </DropdownContext>
    )
}