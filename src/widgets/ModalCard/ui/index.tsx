import {CartEmpty, useCartStore} from "../../../features/cart";
import {Modal} from "../../../shared/components/Modal";
import {useEffect, useState} from "react";
import {cn} from "../../../shared/lib/cn.ts";

export const ModalCard = () => {
    const active = useCartStore((s) => s.active)
    const close = useCartStore((s) => s.close)
    const items = useCartStore((s) => s.items)

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (active) {
            setTimeout(() => setIsVisible(true), 10)
        } else {
            setIsVisible(false)
        }
    }, [active])

    if(!active) return null

    return (
        <Modal
            isOpen={active}
            onClose={close}
            className={cn([
                `absolute rounded-none top-0 right-0 h-screen`,
                `transform transition-transform duration-300 ease-in-out`,
                isVisible ? 'translate-x-0' : 'translate-x-full'
            ])}
        >
            {/* Empty cart */}
            {items.length <=0 && <CartEmpty />}
        </Modal>
    )
}