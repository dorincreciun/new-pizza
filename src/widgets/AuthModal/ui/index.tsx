import {LoginForm, RegisterForm, useAuthModalStore} from "../../../features/authorization";
import {Modal} from "../../../shared/components/Modal";

export const AuthModal = () => {
    const current = useAuthModalStore((s) => s.current)
    const close = useAuthModalStore((s) => s.close)

    if(!current) return null

    return (
        <Modal
            isOpen={Boolean(current)}
            onClose={() => close()}
        >
            {current === "login" && <LoginForm/>}
            {current === "register" && <RegisterForm/>}
        </Modal>
    )
}