import type {RouteObject} from "react-router";
import {lazy} from "react";

/* Lazy load */
const OrdersPage = lazy(() => import('./ui/page'))

export const ORDERS_ROUTING: RouteObject[] = [{
    path: "/orders",
    element: <OrdersPage />
}]