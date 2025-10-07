import type {RouteObject} from "react-router";
import {lazy} from "react";

/* Lazy load */
const HomePage = lazy(() => import("../ui").then(({ HomePage }) => ({ default: HomePage })))

export const HOME_ROUTING: RouteObject[] = [{
    index: true,
    element: <HomePage />,
}]