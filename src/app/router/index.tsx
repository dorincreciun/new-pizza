import {useRoutes} from "react-router";

/* Route config */
import {HOME_ROUTING} from "../../pages/Home/routing";
import {AUTH_ROUTING} from "../../pages/Auth/routing";

export const Router = () => useRoutes([
    ...HOME_ROUTING,
    ...AUTH_ROUTING,

    { path: "*", element: "404" }
])