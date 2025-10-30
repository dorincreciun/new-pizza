import type {RouteObject} from "react-router";
import {lazy} from "react";

/* Lazy load */
const NotFoundPage = lazy(() => import('./ui/page'))

export const NOTFOUND_ROUTING: RouteObject[] = [{
    path: "*",
    element: <NotFoundPage />
}]