import {useAuthModalStore} from "../model/store.ts";
import {Modal} from "../../../shared/components/Modal";
import {Login, Register} from "../../../features/auth";

export const AuthModal = () => {
    const close = useAuthModalStore((s) => s.onClose)
    const open = useAuthModalStore((s) => s.open)
    const view = useAuthModalStore((s) => s.view)

    if(!open) return null

   return (
       <Modal isOpen={open} onClose={close}>
           {view === "login" && <Login />}
           {view === "register" && <Register />}
       </Modal>
   )
}