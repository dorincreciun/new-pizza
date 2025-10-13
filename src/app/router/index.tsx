import {useRoutes} from "react-router";

/* Route config */
import {HOME_ROUTING} from "../../pages/Home/routing";

export const Router = () => useRoutes([
    ...HOME_ROUTING,
    { path: "*", element: "404" }
])