import type {ModalProps} from "../model/types.ts";
import {cn} from "../../../lib/cn.ts";
import {createPortal} from "react-dom";
import {X} from "lucide-react";
import {Button} from "../../Button";

export const Modal = ({className, children, isOpen, onClose}: ModalProps) => {

    if (!isOpen) return null

    return createPortal(
        <>
            {/* Overlay */}
            <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]" />

            {/* Modal box */}
            <div className={
                cn([
                    "fixed inset-0 z-50 flex items-center justify-center",
                    "pointer-events-none",
                ])}
            >
                <div className={
                    cn([
                            "pointer-events-auto",
                            "relative bg-white rounded-xl shadow-lg",
                            "max-w-[90vw] w-[480px]",
                            "p-6",
                        ], className
                    )}
                     onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <Button
                        isOnlyIcon
                        color={"secondary"}
                        size={"small"}
                        aria-label={"Close modal button"}
                        className={"absolute top-3 right-3"}
                        onClick={onClose}
                    >
                        <X size={18} />
                    </Button>

                    {/* Outlet */}
                    {children}
                </div>
            </div>
        </>,
        document.body
    )
}

Modal.displayName = "Modal"