import {AuthButton} from "../../../features/authorization";
import {CartToggleButton} from "../../../features/cart";
import {Link} from "react-router";

export const Header = () => {
    return (
        <header className="py-3.5 border-b border-gray-200 h-[75px]">
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <div className={"relative flex max-w-max flex-shrink-0 items-center gap-4"}>
                    <Link className={"absolute inset-0"} to={"/"}></Link>
                    <img src="/logo-pizza.png" alt=""/>
                    <div>
                        <div className={"text-2xl leading-[1.625rem] font-black tracking-[1%]"}>
                            NEXT PIZZA
                        </div>
                        <div className={"leading-5 text-logo-text"}>вкусней уже некуда</div>
                    </div>
                </div>
                <div className="flex gap-4">
                    {/* Authorization button */}
                    <AuthButton/>
                    {/* Cart button */}
                    <CartToggleButton/>
                </div>
            </div>
        </header>
    )
}
