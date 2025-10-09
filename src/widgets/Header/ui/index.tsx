import {useSessionStore} from "../../../entitites/session";
import {userLogout} from "../../../features/auth/api/userLogout.ts";
import {Button} from "../../../shared/components/Button";
import {LogOut, User} from "lucide-react";
import {Logo} from "../../../shared/components/Logo";
import {useAuthModalStore} from "../../AuthModal";

export const Header = () => {
    const active = useSessionStore((s) => s.active)
    const openAuthModal = useAuthModalStore((s) => s.onOpen)

    return (
        <header className="py-3.5 border-b border-gray-200 h-[75px]">
            <div className="container flex justify-between items-center">
                <Logo/>

                {
                    active
                        ? (<Button kind={"outlined"} onClick={userLogout}>
                            <LogOut/> Logout
                        </Button>)
                        : (<Button onClick={() => openAuthModal("login")}>
                            <User/> Login
                        </Button>)
                }

            </div>
        </header>
    )
}
