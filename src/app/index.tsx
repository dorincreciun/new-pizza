import { createRoot } from 'react-dom/client'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router'

/* Stores / state */
import { useSessionStore } from '../entitites/session'

/* App router */
import { AppRouter } from './router'

/* Widgets */
import { Header } from '../widgets/Header'
import { ModalAuth } from '../widgets/ModalAuth'
import { ModalCard } from '../widgets/ModalCard'
import { Loader } from '../shared/components/Loader'

/* Styles */
import './styles/index.css'

createRoot(document.getElementById('root')!).render(<AppTemplate/>)

function AppTemplate() {
    const init = useSessionStore((s) => s.initSession)

    useEffect(() => void init(), [])

    return (
        <BrowserRouter>
            {/* App */}
            <Header />
            <AppRouter />

            {/* Modals */}
            <ModalAuth />
            <ModalCard />

            {/* Overlay */}
            <Loader />
        </BrowserRouter>
    )
}


