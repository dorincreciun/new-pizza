import type {components} from "../../../shared/types/schema";

export type CategoryType = components['schemas']['Category']

export type UseCategoriesResult = {
    data: CategoryType[];
    isLoading: boolean;
    error: string | null;
}
