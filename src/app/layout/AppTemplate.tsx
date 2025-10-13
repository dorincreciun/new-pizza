import {BrowserRouter} from "react-router";
import {Header} from "../../widgets/Header";
import {Router} from "../router";
import {useEffect} from "react";
import {useSessionStore} from "../../entitites/session";
import {Loader} from "../../shared/components/Loader";
/* Modals */
import {ModalCard} from "../../widgets/ModalCard";
import {ModalAuth} from "../../widgets/ModalAuth";

export function AppTemplate() {
    const init = useSessionStore((s) => s.initSession)

    useEffect(() => void init(), [])

    return (
        <BrowserRouter>
            {/* App */}
            <Header />
            <Router />

            {/* Modals */}
            <ModalAuth />
            <ModalCard />

            {/* Overlay */}
            <Loader />
        </BrowserRouter>
    )
}