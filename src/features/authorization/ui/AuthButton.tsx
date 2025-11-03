import {Button} from "../../../shared/components/Button";
import {LogOut, User} from "lucide-react";
import {useSessionStore} from "../../../entitites/session";
import {useLoginModal} from "../model/store/login-store";

export const AuthButton = () => {
    const active = useSessionStore((s) => s.active)
    const fnOpenLogin = useLoginModal((s) => s.open)

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
                    onClick={fnOpenLogin}
                >
                    <User/> Login
                </Button>
            )
    }
}