import type {RouteObject} from "react-router";
import {lazy} from "react";

/* Lazy load */
const ProductLayout = lazy(() => import('../ui/layout.tsx'))
const ProductPage = lazy(() => import('../ui/page.tsx'))

export const PRODUCT_ROUTING: RouteObject[] = [{
    path: "/product",
    element: <ProductLayout />,
    children: [
        { index: true, element: <ProductPage/>},
        { path: ":name", element: <ProductPage/>},
    ]
}]