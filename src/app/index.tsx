import {createRoot} from 'react-dom/client'
import {useEffect} from 'react'
import {BrowserRouter} from 'react-router'

/* Stores / state */
import {initSession} from '../entitites/session'

/* App router */
import {AppRouter} from './router'

/* Features */
import {ModalLogin} from "../features/authorization";

/* Widgets */
import {Header} from '../widgets/Header'

/* Shared */
import {Loader} from '../shared/components/Loader'

/* Styles */
import './styles/index.css'

createRoot(document.getElementById('root')!).render(<AppTemplate/>)

function AppTemplate() {

    useEffect(() => void initSession(), [])

    return (
        <BrowserRouter>
            {/* App */}
            <Header />
            <AppRouter />

            {/* Modals */}
            <ModalLogin />

            {/* Overlay */}
            <Loader />
        </BrowserRouter>
    )
}


