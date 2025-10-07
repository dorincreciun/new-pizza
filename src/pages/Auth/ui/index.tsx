import { NavLink, Outlet} from "react-router";
import {cn} from "../../../shared/lib/cn.ts";

export const AuthPage = () => {
    return (
        <main className="container">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-3xl text-center">Autentificare</h1>

                <div className="flex gap-2 my-4">
                    <NavLink to="login" className={({isActive}) => cn(
                        "flex-1 text-center px-3 p-2 bg-gray-200",
                        isActive && "bg-blue-500 text-white"
                    )}>Login</NavLink>
                    <NavLink to="register" className={({isActive}) => cn(
                        "flex-1 text-center px-3 p-2 bg-gray-200",
                        isActive && "bg-blue-500 text-white"
                    )}>Register</NavLink>
                </div>

                <Outlet/>
            </div>
        </main>
    );
};
