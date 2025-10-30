import {useRoutes} from "react-router";

/* Pages */
import {CATALOG_ROUTING} from "../../pages/catalog/routing.tsx";
import {NOTFOUND_ROUTING} from "../../pages/not-found/routing.tsx";
import {PRODUCT_ROUTING} from "../../pages/product/routing.tsx";
import {ORDERS_ROUTING} from "../../pages/orders/routing.tsx";
import {CART_ROUTING} from "../../pages/cart/routing.tsx";

export const AppRouter =  () => useRoutes([
    ...CATALOG_ROUTING,
    ...NOTFOUND_ROUTING,
    ...PRODUCT_ROUTING,
    ...ORDERS_ROUTING,
    ...CART_ROUTING
])