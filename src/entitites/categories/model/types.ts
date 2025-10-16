import type {paths} from "../../../shared/api/schema";

export type CategoryType = NonNullable<
    paths['/categories']['get']['responses']['200']['content']['application/json']['data']
>[number];

export type ResponseError = paths["/categories"]["get"]["responses"]["500"]["content"]["application/json"]

