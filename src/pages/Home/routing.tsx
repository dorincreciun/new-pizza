import type {RouteObject} from "react-router";
import {lazy} from "react";

/* Lazy load */
const CatalogLayout = lazy(() => import("./ui/layout").then(({ CatalogLayout }) => ({ default: CatalogLayout })))
const CatalogPage = lazy(() => import("./ui/page").then(({ CatalogPage }) => ({ default: CatalogPage })))

export const HOME_ROUTING: RouteObject[] = [{
    path: "/",
    element: <CatalogLayout />,
    children: [
        { index: true, element: <CatalogPage /> },
        { path: ":slug", element: <CatalogPage /> },
    ]
}]