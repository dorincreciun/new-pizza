import {useRoutes} from "react-router";

/* Pages */
import {CATALOG_ROUTING} from "../../pages/catalog";
import {NOTFOUND_ROUTING} from "../../pages/not-found";
import {PRODUCT_ROUTING} from "../../pages/product";
import {ORDERS_ROUTING} from "../../pages/orders";
import {CART_ROUTING} from "../../pages/cart";

export const AppRouter =  () => useRoutes([
    ...CATALOG_ROUTING,
    ...NOTFOUND_ROUTING,
    ...PRODUCT_ROUTING,
    ...ORDERS_ROUTING,
    ...CART_ROUTING
])