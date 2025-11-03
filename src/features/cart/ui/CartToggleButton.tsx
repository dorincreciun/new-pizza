import {Button} from "../../../shared/components/Button";
import {ShoppingBag} from "lucide-react";

export const CartToggleButton = () => {
    return (
        <Button
            isOnlyIcon
            kind={"outlined"}
            aria-label={"Cart button"}
        >
            <ShoppingBag />
        </Button>
    )
}