import {useRoutes} from "react-router";

/* Route config */
import {HOME_ROUTING} from "../../pages/Home";
import {AUTH_ROUTING} from "../../pages/Auth";

export const Router = () => useRoutes([
    ...HOME_ROUTING,
    ...AUTH_ROUTING,

    { path: "*", element: "404" }
])