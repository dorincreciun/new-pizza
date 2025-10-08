import {BrowserRouter} from "react-router";
import {Header} from "../../widgets/Header";
import {Router} from "../router";
import {useEffect} from "react";
import {useSessionStore} from "../../entitites/session";

export function AppTemplate() {
    const init = useSessionStore((s) => s.initSession)
    const loading = useSessionStore((s) => s.isLoading)

    useEffect(() => void init(), [])

    if(loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white">
                <div role="status" aria-live="polite" className="inline-flex items-center gap-3">
                    <span className="relative inline-flex h-5 w-5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                        <span className="relative inline-flex h-5 w-5 animate-spin items-center justify-center rounded-full border-2 border-current border-t-transparent"></span>
                    </span>
                    <span className="text-sm font-medium">Se încarcă…</span>
                </div>
            </div>
        );
    }

    return (
        <BrowserRouter>
            <Header />
            <Router />
        </BrowserRouter>
    )
}