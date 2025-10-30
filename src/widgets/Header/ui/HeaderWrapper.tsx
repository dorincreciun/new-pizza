import type {FC, PropsWithChildren} from "react";

export const HeaderWrapper: FC<PropsWithChildren> = ({children}) => {
    return (
        <header className="py-3.5 border-b border-gray-200 h-[75px]">
            <div className="container flex justify-between items-center">
                {children}
            </div>
        </header>
    )
}