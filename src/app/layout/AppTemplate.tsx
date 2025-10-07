import {BrowserRouter} from "react-router";
import {Header} from "../../widgets/Header";
import {Router} from "../router";
import {useSessionStore} from "../../entitites/session";
import {useEffect} from "react";

export function AppTemplate() {
    const fnInitSession = useSessionStore((s) => s.initSession)

    useEffect(() => void fnInitSession(), [])

    return (
        <BrowserRouter>
            <Header />
            <Router />
        </BrowserRouter>
    )
}