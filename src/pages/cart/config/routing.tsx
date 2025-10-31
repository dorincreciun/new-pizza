import type {RouteObject} from "react-router";
import {lazy} from "react";

/* Lazy load */
const CartLayout = lazy(() => import('../ui/layout.tsx'))
const CartPage = lazy(() => import('../ui/page.tsx'))

export const CART_ROUTING: RouteObject[] = [{
    path: "/cart",
    element: <CartLayout />,
    children: [
        { index: true, element: <CartPage/>},
    ]
}]