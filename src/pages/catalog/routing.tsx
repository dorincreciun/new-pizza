import type {RouteObject} from "react-router";
import {lazy} from "react";

/* Lazy load */
const CatalogLayout = lazy(() => import("./ui/layout"))
const CatalogPage = lazy(() => import("./ui/page"))

export const CATALOG_ROUTING: RouteObject[] = [{
    path: "/",
    element: <CatalogLayout />,
    children: [
        { index: true, element: <CatalogPage /> },
        { path: ":slug", element: <CatalogPage /> },
    ]
}]