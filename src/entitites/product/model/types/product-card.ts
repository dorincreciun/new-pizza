import type {ApiProduct} from "../../../../shared/types/global";

export type ProductCardProps = Pick<ApiProduct,
    | "id"
    | "name"
    | "description"
    | "imageUrl"
    | "isCustomizable"
    | "basePrice"
>