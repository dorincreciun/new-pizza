import {BrowserRouter} from "react-router";
import {Header} from "../../widgets/Header";
import {Router} from "../router";
import {useEffect} from "react";
import {useSessionStore} from "../../entitites/session";
import {Loader} from "../../shared/components/Loader";
import {AuthModal} from "../../widgets/AuthModal";

export function AppTemplate() {
    const init = useSessionStore((s) => s.initSession)

    useEffect(() => void init(), [])

    return (
        <BrowserRouter>
            <Header />
            <Router />

            {/* */}
            <AuthModal />
            <Loader />
        </BrowserRouter>
    )
}