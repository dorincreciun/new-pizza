import {Button} from "../../../shared/components/Button";
import {userLogout} from "../../../features/auth/api/user-logout.ts";
import {LogOut, ShoppingBag, User} from "lucide-react";
import {useSessionStore} from "../../../entitites/session";
import {useAuthModalStore} from "../../ModalAuth";
import {useCartStore} from "../../../features/cart";

export const HeaderActions = () => {
    const active = useSessionStore((s) => s.active)
    const openAuthModal = useAuthModalStore((s) => s.onOpen)
    const openCartModal = useCartStore((s) => s.open)
    return (
        <div className="flex gap-4">
            {
                active
                    ? (<Button kind={"outlined"} onClick={userLogout}>
                        <LogOut/> Logout
                    </Button>)
                    : (<Button kind={"outlined"} onClick={() => openAuthModal("login")}>
                        <User/> Login
                    </Button>)
            }

            <Button
                isOnlyIcon
                kind={"outlined"}
                aria-label={"Cart button"}
                onClick={openCartModal}
            >
                <ShoppingBag />
            </Button>
        </div>
    )
}