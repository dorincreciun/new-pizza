import type { components } from "./schema";

export type ApiUser = components["schemas"]["UserDTO"];
export type ApiAuthResponse = components["schemas"]["AuthResponse"];
export type ApiLogoutResponse = components["schemas"]["LogoutResponse"];
export type ApiAuthRegisterRequest = components["schemas"]["AuthRegisterRequest"];
export type ApiAuthLoginRequest = components["schemas"]["AuthLoginRequest"];
export type ApiErrorResponse = components["schemas"]["ErrorResponse"];

export type ApiCategory = components["schemas"]["Category"];
export type ApiIngredient = components["schemas"]["Ingredient"];
export type ApiFlag = components["schemas"]["Flag"];
export type ApiDoughType = components["schemas"]["DoughType"];
export type ApiSizeOption = components["schemas"]["SizeOption"];
export type ApiProduct = components["schemas"]["Product"];
export type ApiProductWithRelations = components["schemas"]["ProductWithRelations"];
export type ApiProductResponse = components["schemas"]["ProductResponse"];
export type ApiProductListResponse = components["schemas"]["ProductListResponse"];
export type ApiBrowseResponse = components["schemas"]["BrowseResponse"];
export type ApiStandardResponse = components["schemas"]["StandardResponse"];
export type ApiPaginationMeta = components["schemas"]["PaginationMeta"];
export type ApiCartItem = components["schemas"]["CartItem"];
export type ApiCart = components["schemas"]["Cart"];
