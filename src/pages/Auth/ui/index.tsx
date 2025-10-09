import {Outlet} from "react-router";

export const AuthPage = () => {
    return (
        <main className="container h-[calc(100vh-75px)]">
            <div className={"grid grid-cols-6 gap-x-3 h-full"}>
                <div className={"col-span-4 size-full flex items-center justify-center bg-gray-100"}>
                    Alt continut
                </div>

                {/* Partea dreaptă - formularul de autentificare */}
                <div className={"col-span-2 flex items-center justify-center p-6"}>
                    <Outlet/>
                </div>
            </div>
        </main>
    );
};