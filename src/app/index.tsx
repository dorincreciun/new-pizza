import {createRoot} from 'react-dom/client'
import {AppTemplate} from "./layout/AppTemplate.tsx";
import './styles/index.css'

createRoot(document.getElementById('root')!).render(<AppTemplate/>)

