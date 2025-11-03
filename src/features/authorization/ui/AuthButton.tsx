import {Button} from "../../../shared/components/Button";
import {LogOut, User} from "lucide-react";
import {useSessionStore} from "../../../entitites/session";
import {useAuthModalStore} from "../model/store/useAuthModalStore.ts";

export const AuthButton = () => {
    const active = useSessionStore((s) => s.active)
    const open = useAuthModalStore((s) => s.open)

    switch (active) {
        case true:
            return (
                <Button kind="outlined">
                    <LogOut/> Logout
                </Button>
            )
        case false:
            return (
                <Button
                    kind="outlined"
                    onClick={() => open("login")}
                >
                    <User/> Login
                </Button>
            )
    }
}