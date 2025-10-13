import {useSessionStore} from "../../../entitites/session";
import {userLogout} from "../../../features/auth/api/userLogout.ts";
import {Button} from "../../../shared/components/Button";
import {LogOut, ShoppingBag, User} from "lucide-react";
import {Logo} from "../../../shared/components/Logo";
import {useAuthModalStore} from "../../ModalAuth";
import {useCartStore} from "../../../features/cart";

export const Header = () => {
    const active = useSessionStore((s) => s.active)
    const openAuthModal = useAuthModalStore((s) => s.onOpen)
    const openCartModal = useCartStore((s) => s.open)

    return (
        <header className="py-3.5 border-b border-gray-200 h-[75px]">
            <div className="container flex justify-between items-center">
                <Logo/>

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
            </div>
        </header>
    )
}
